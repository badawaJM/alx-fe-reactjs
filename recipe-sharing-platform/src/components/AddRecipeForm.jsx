import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});  // State to hold validation errors

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!steps.trim()) newErrors.steps = 'Cooking steps are required';
    if (!image.trim()) newErrors.image = 'Image URL is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);  // If there are errors, update the error state
      return;  // Stop the submission process if there are validation errors
    }

    // Form is valid, create the new recipe
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split('\n'),
      steps: steps.split('\n'),
      image,
    };

    console.log('New Recipe:', newRecipe);
    // Optionally, you can add logic here to save the recipe to a server or state
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-semibold text-gray-700">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            rows="5"
            placeholder="List ingredients separated by line breaks."
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="steps" className="block text-sm font-semibold text-gray-700">
            Cooking Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-2 border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            rows="5"
            placeholder="Describe the cooking steps, separated by line breaks."
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
            Recipe Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className={`w-full p-2 border ${errors.image ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
