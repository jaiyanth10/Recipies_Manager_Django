from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import Recipe
import json

@csrf_exempt
@require_http_methods(["POST"])
def submit_recipie(request):
    try:
        # Parse the JSON data from the request body
        data = json.loads(request.body)
        
        # Create a new Recipe object with the received data
        recipe = Recipe(
            name=data['name'],
            image=data['image'],
            ingridients =data['ingridients'],
            steps='\n'.join(data['steps'])  # Join the list of steps into a single string
        )
        
        # Save the Recipe object to the database
        recipe.save()
        
        # Return a success message
        return JsonResponse({'message': 'Recipe submitted successfully!'}, status=201)
    
    except (json.JSONDecodeError, KeyError):
        # Return an error message if the input data is invalid
        return JsonResponse({'error': 'Invalid input data'}, status=400)

@require_http_methods(["GET"])
def fetch_recipie(request):
    # Retrieve all Recipe objects from the database
    recipes = Recipe.objects.all()
    
    # Convert the Recipe objects to a list of dictionaries
    data = [
        {
            'name': recipe.name,
            'image': recipe.image,
            'ingridients' : recipe.ingridients,
            'steps': recipe.steps.split('\n')  # Split the steps string into a list
        }
        for recipe in recipes
    ]
    
    # Return the list of recipes as a JSON response
    return JsonResponse(data, safe=False)
