import os
import json
from dotenv import load_dotenv
from google import adk
from typing import List, Dict

load_dotenv()

# Load the photo metadata
METADATA_PATH = os.path.join(os.path.dirname(__file__), "photos_metadata.json")
with open(METADATA_PATH, "r") as f:
    PHOTOS_METADATA = json.load(f)

class PhotographyTools:
    """Tools for the Photography agents."""
    
    @adk.tool
    def search_photos(self, query: str) -> str:
        """Search for photos based on category, mood, or description."""
        query = query.lower()
        results = []
        for photo in PHOTOS_METADATA:
            if (query in photo["category"].lower() or 
                query in photo["title"].lower() or 
                query in photo["description"].lower() or 
                query in photo["mood"].lower()):
                results.append(photo)
        return json.dumps(results) if results else "No matching photos found."

    @adk.tool
    def get_photo_details(self, photo_id: str) -> str:
        """Get technical details (gear, technique) for a specific photo ID."""
        for photo in PHOTOS_METADATA:
            if photo["id"] == photo_id:
                return json.dumps({
                    "title": photo["title"],
                    "gear": photo["gear"],
                    "technique": photo["technique"],
                    "description": photo["description"]
                })
        return "Photo not found."

    @adk.tool
    def recommend_similar_photos(self, photo_id: str) -> str:
        """Find photos similar in category or mood to the given photo ID."""
        target_photo = next((p for p in PHOTOS_METADATA if p["id"] == photo_id), None)
        if not target_photo:
            return "Photo not found."
            
        similar = []
        for p in PHOTOS_METADATA:
            if p["id"] == photo_id:
                continue
            # Simple similarity based on category
            if p["category"] == target_photo["category"]:
                similar.append(p)
        return json.dumps(similar[:3]) if similar else "No similar photos found."

# 1. Photography Learning Assistant
learning_assistant = adk.Agent(
    name="Learning Assistant",
    model="gemini-2.0-flash",
    instructions="""
    You are an expert cinematic photographer and educator. 
    Your goal is to help enthusiasts learn the art of photography through the 'Aura' portfolio.
    - Explain techniques like exposure, composition, and lighting used in specific photos.
    - Recommend gear based on the user's shooting style.
    - If a user asks about a photo in the portfolio, use the 'get_photo_details' tool to provide accurate info.
    - Be encouraging, technical but accessible, and passionate about visual storytelling.
    """,
    tools=[PhotographyTools().get_photo_details, PhotographyTools().search_photos]
)

# 2. Photography Curator Agent
curator_agent = adk.Agent(
    name="Curator Agent",
    model="gemini-2.0-flash",
    instructions="""
    You are an artistic curator with a deep eye for visual storytelling and mood.
    Your goal is to help visitors discover photography that resonates with them.
    - Recommend photos based on 'vibe', mood, color palette, or category.
    - Use 'search_photos' to find work that matches a user's intent.
    - Use 'recommend_similar_photos' to suggest related pieces.
    - Help users navigate the 'Aura' collection and create an emotional connection with the art.
    - Your tone is sophisticated, poetic, and observant.
    """,
    tools=[PhotographyTools().search_photos, PhotographyTools().recommend_similar_photos]
)

# Orchestrator to route between agents
studio_concierge = adk.Agent(
    name="Studio Concierge",
    model="gemini-2.0-flash",
    instructions="""
    You are the head of the Aura Studio. You greet visitors and route them to either 
    the 'Learning Assistant' (for technical/educational questions) or 
    the 'Curator Agent' (for discovery and recommendations).
    
    - If the user asks 'how was this shot' or 'what gear was used', route to Learning Assistant.
    - If the user asks 'show me something moody' or 'find similar photos', route to Curator Agent.
    - Be welcoming and professional.
    """,
    agents=[learning_assistant, curator_agent]
)
