
# Foodie Delights - Recipe Application

## Estimated Time: 60 minutes

Develop a Foodie Delights Recipe App for users to easily find, save, and explore diverse recipes based on ingredients and dietary preferences. Simplify cooking and meal planning with this convenient and delicious recipe app.

## Objectives:

By the end of this lab, you will have achieved the following:

**1.** Created a React-based project for the Foodie Delights Recipe Application.

**2.** Developed a user-friendly and intuitive recipe browsing and management system.

**3.** Efficiently managed recipe data, including ingredients, dietary information, and instructions, utilizing React's state management (e.g., `useState`).

**4.** Implemented interactive features for users to browse, search, and save recipes for an engaging experience.

**5.** Enhanced the application's visual appeal and user experience through well-designed CSS styles.

**6.** Ensured cross-browser compatibility and conducted thorough testing to deliver a reliable web application.

**7.** Employed Git for version control, facilitating collaboration and maintaining a structured codebase for the Foodie Delights Recipe Application.

## Exercise 1: Setup a React Project

**Fork the sample Git repository**

**1.** Go to the project repository [here](https://github.com/sktcontentteam/react-app-bmi-calculator.git) 
which has the partially developed code for this react project.

**2.** Create a fork of the repository into your own GitHub Account. 

*You will need to have a github account of your own to do so.*
*If you dont already have one, please refer to the [link](https://github.com/) to create a new GitHub Account by following the instructions.*

<img src="images/Fork-repo.png" width="75%"/> 

**3.** Go to your forked repository and copy the url to clone your repo in the local workspace.

<img src="images/repo-url.png" width="75%"/> 

**4.** In the Visual studio code, Open a terminal window by using the menu in the editor: Terminal > New Terminal.

<img src="images/vs-code-starting-img.png" width="75%"> 

<img src="images/new-terminal.png" width="75%"/> 

**5.** Modify the directory location where you intend to store your project in your local workspace, as demonstrated below.

<img src="images/cd.png" width="75%"/> 

**6.** Clone the forked repository by running the command given below: 

```
git clone <your_repo_name>
```

<img src="images/git-clone.png" width="75%"/> 

**7.** This will clone the repository with BMI Calculator application files in your home directory in the Visual Studio Code. You can check the source folder created by using the below command.

```bash
ls
```

**8.** Change to the project directory and check the project structure and files within it, using the below command.

```bash
cd react-recipe-app && ls
```

**9.** All packages required to be installed are listed in the file `package.json`. Execute the command given below, to save and install the packages.

```bash
npm install -s
```

**10.** The folder structure of the react-recipe-app should be similar to the structure shown in the screenshot below. 

<img src="images/file-explorer.png" width=200/>


## Exercise 2: Place the UI Components

The UI of the Foodie Delights - Recipe Application that you will create in this lab will be similar to the images shown below.

<img src="images/bmi-app-1.png" width="75%"/>

<img src="images/bmi-app-2.png" width="75%"/>

## Features:

In this project, you will harness the capabilities of React.js to craft the Foodie Delights Recipe Application, a dynamic platform for discovering and exploring diverse recipes.

React.js empowers you to manage state, handle events, and render dynamic UI elements, making it the ideal framework for building this interactive and engaging culinary application.

**i.** Create a robust search functionality allowing users to find recipes based on ingredient input and filter recipes by category.

**ii.** Implement a detailed recipe view that showcases step-by-step instructions, ingredients, and additional information.

**iii.** Design a responsive user interface that adapts seamlessly to various screen sizes and devices.

**iv.** Enhance user experience through input validation, ensuring accurate and reliable search results.


## Create the Foodie Delights - Recipe App Component

## Step 1: Declare Required `useState` Variables

In the `app.js` file, we begin by declaring the necessary `useState` variables to manage the state of our Foodie Delights Recipe Application. These variables are used to store important data and manage the application's functionality.

**i.** `recipes` and `setRecipes`: These variables manage the state of recipes data and allow us to update it as needed.

**ii.** `loading` and `setLoading`: These variables help us manage the loading state of the application, ensuring a smooth user experience.

**iii.** `query` and `setQuery`: These variables store and update the user's input for recipe search.

**iv.** `selectedCategory` and `setSelectedCategory`: These variables track the user's selected category filter for recipe search.

**Solution:** Replace the following placeholder code in `app.js`:

```javascript
// Initialize required state for recipes and loading
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
```

## Step 2: Create UI Components

In the `app.js` file, we define the user interface (UI) components required for the Foodie Delights Recipe Application. These components include the search input field, category filter dropdown, and elements to display recipe results.

**Solution:** Replace the following placeholder code in `app.js` with your UI components:

```javascript
// Step 2: Create UI Components 
<Router>
<div className="app">
  {/* Header */}
  <div className="app_header">
    <Link to="/" className="linktext">
      <h1>🍴 Foodie Delights 🍣</h1>
    </Link>
  </div>
  
  {/* Search Form */}
  <p>Search Your Recipe Here:</p>
  <form className="app__searchForm" onSubmit={onSubmit}>
    <input
      className="app__input"
      type="text"
      placeholder="Enter Ingredient"
      autoComplete="off"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <input className="app__submit" type="submit" value="Search" />
    <select
      className="app__category"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      {categoryOptions.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </form>

  {/* Recipe Results */}
  {loading ? (
    <p>Loading...</p>
  ) : (
    <div className="app__recipes">
      {recipes.length !== 0 ? (
        <Routes>
          <Route
            path="/"
            element={
              <div className="recipe-grid">
                {recipes.map((recipe) => (
                  <Link
                    className="linktext"
                    key={recipe.label}
                    to={`/recipe/${encodeURIComponent(recipe.label)}`}
                  >
                    <RecipeTile recipe={recipe} />
                  </Link>
                ))}
              </div>
            }
          />

          <Route
            path="/recipe/:label"
            element={<RecipeDetailsWrapper recipes={recipes} />}
          />
        </Routes>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  )}
</div>
</Router>
```

## Step 3: Verify Style in `src/App.css` for the UI

Please verify your 'src/app.css' file for the CSS styles. If you cannot find the CSS styles in the file, you can utilize the following code within the 'app.css' file

<details>
<Summary>Click to view the code</Summary>

```css
/* App.css */

body {
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  font-family: 'Arial, sans-serif';
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.appContainer {
  text-align: center;
  font-family: 'Arial, sans-serif';
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.heading {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 20px;
}

.label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.input {
  width: 90%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.unit-dropdown {
  width: 90%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}
.unit-option {
  width: 90%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buttonHover {
  background-color: #0056b3;
}

.result {
  font-size: 1.8rem;
  margin-top: 20px;
  color: #007bff;
}

/* BMI Category styles */
.bmi-category {
  font-size: 1.5rem;
  margin-top: 10px;
  font-weight: bold;
}

/* Style BMI categories with different colors */
.underweight {
  color: blue; /* Blue for Underweight */
}

.average {
  color: green; /* Green for Average */
}

.overweight {
  color: red; /* Red for Overweight */
}
```
</details>

## Step 4: Implement the `calculateBMI` Function

In this step, we'll implement the `calculateBMI` function in the `app.js` file. This function calculates the BMI (Body Mass Index) based on the user's input for height, weight, and selected units (cm/kg or ft/lb). Additionally, it determines the BMI category and updates the state variables accordingly.

**i.** The function begins by parsing the user's input for height and weight into floating-point numbers (h and w).

**ii.** It then checks the selected unit (unit) to determine whether the user has chosen metric or imperial units.

**iii.** If metric units are selected and valid height and weight inputs are provided, the BMI is calculated using the formula: weight (kg) / (height (m) * height (m)). The result is rounded to two decimal places.

**iv.** Based on the calculated BMI value, the corresponding BMI category is determined and set using the setBMICategory function.

**v.** If imperial units are selected and valid inputs are provided, the height is converted from feet to inches, and the BMI is calculated using the formula: (weight (lb) / (height (in) * height (in))) * 703.

**vi.** Again, the BMI category is determined and set based on the calculated BMI value.

**vii.** If any invalid input is detected (e.g., negative values or empty fields), the BMI and BMI category are reset to null and an empty string.


**Solution:** Change the below code in `app.js` where you get the placeholder `Replace your calculateBMI function code here`


<details>
<Summary>Click to view the code</Summary>

```javascript
const calculateBMI = () => {
  const h = parseFloat(height);
  const w = parseFloat(weight);

  if (unit === 'metric' && h > 0 && w > 0) {
    const bmiValue = (w / ((h / 100) * (h / 100))).toFixed(2);
    setBMI(bmiValue);

    // Determine BMI category based on the calculated BMI
    if (bmiValue <= 18.5) {
      setBMICategory('Underweight');
    } else if (bmiValue <= 24.9) {
      setBMICategory('Average');
    } else if (bmiValue <= 29.9) {
      setBMICategory('Overweight');
    } else if (bmiValue >= 30) {
      setBMICategory('Obese');
    } else {
      setBMICategory('BMI');
    }
  } else if (unit === 'imperial' && h > 0 && w > 0) {
    // Convert height from feet to inches
    const heightInInches = h * 12;
    const bmiValue = ((w / (heightInInches * heightInInches)) * 703).toFixed(2);
    setBMI(bmiValue);

    // Determine BMI category based on the calculated BMI
    if (bmiValue <= 18.5) {
      setBMICategory('Underweight');
    } else if (bmiValue <= 24.9) {
      setBMICategory('Average');
    } else if (bmiValue <= 29.9) {
      setBMICategory('Overweight');
    } else if (bmiValue >= 30) {
      setBMICategory('Obese');
    } else {
      setBMICategory('BMI');
    }
  } else {
    // Handle invalid input (e.g., negative values or empty fields)
    setBMI(null);
    setBMICategory('');
  }
};
```
</details>

## Step 5: Implement the `handleUnitChange` Function

In this step, we'll implement the `handleUnitChange` function in the `app.js` file. This function is responsible for handling the change in units (from cm/kg to ft/lb or vice versa) when the user selects a different unit from the dropdown menu. It also resets the input fields, BMI result, and BMI category when the unit is changed.

**i.** The function is triggered when the user selects a different unit from the dropdown menu (e.target.value contains the selected unit).

**ii.** It updates the unit state variable with the newly selected unit.

**iii.** The height and weight input fields are reset to empty strings using setHeight('') and setWeight(''), ensuring that any previous values are cleared.

**iv.** The BMI result (bmi) is set to null using setBMI(null) to remove any previously calculated BMI value.
**v.** The BMI category (bmiCategory) is also reset to an empty string using setBMICategory('') to clear any previous BMI category.

**Solution:** Change the below code in `app.js` where you get the placeholder `Replace your handleUnitChange function code here`


```javascript
const handleUnitChange = (e) => {
  // Handle unit change from the dropdown
  setUnit(e.target.value);
  setHeight(''); // Reset height input
  setWeight(''); // Reset weight input
  setBMI(null); // Reset BMI result
  setBMICategory(''); // Reset BMI category
};
```

## Step 6: Finalize the `app.js` File

In this step, we'll provide the complete `app.js` file that incorporates all the previous steps' solutions. This file contains the entire React component for the BMI Calculator, including the state variables, user interface elements, event handlers, and the BMI calculation logic.


<details>
<Summary>Click to view the code</Summary>

```javascript
import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric'); // Default to metric
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
  
    if (unit === 'metric' && h > 0 && w > 0) {
      const bmiValue = (w / ((h / 100) * (h / 100))).toFixed(2);
      setBMI(bmiValue);
  
      // Determine BMI category based on the calculated BMI
      if (bmiValue <= 18.5) {
        setBMICategory('Underweight');
      } else if (bmiValue <= 24.9) {
        setBMICategory('Average');
      } else if (bmiValue <= 29.9) {
        setBMICategory('Overweight');
      } else if (bmiValue >= 30) {
        setBMICategory('Obese');
      } else {
        setBMICategory('BMI');
      }
    } else if (unit === 'imperial' && h > 0 && w > 0) {
      // Convert height from feet to inches
      const heightInInches = h * 12;
      const bmiValue = ((w / (heightInInches * heightInInches)) * 703).toFixed(2);
      setBMI(bmiValue);
  
      // Determine BMI category based on the calculated BMI
      if (bmiValue <= 18.5) {
        setBMICategory('Underweight');
      } else if (bmiValue <= 24.9) {
        setBMICategory('Average');
      } else if (bmiValue <= 29.9) {
        setBMICategory('Overweight');
      } else if (bmiValue >= 30) {
        setBMICategory('Obese');
      } else {
        setBMICategory('BMI');
      }
    } else {
      // Handle invalid input (e.g., negative values or empty fields)
      setBMI(null);
      setBMICategory('');
    }
  };

  const handleUnitChange = (e) => {
    // Handle unit change from the dropdown
    setUnit(e.target.value);
    setHeight(''); // Reset height input
    setWeight(''); // Reset weight input
    setBMI(null); // Reset BMI result
    setBMICategory(''); // Reset BMI category
  };

  return (
    <div className="container">
      <div className="appContainer">
        <h1 className="heading">BMI Calculator</h1>
        <div className="input-container">
        <div className="unit-select">
            <label className="label">Select Units:</label>
            <select
              value={unit}
              onChange={handleUnitChange}
              className="unit-dropdown"
            >
              <option value="metric" className='unit-option'>cm/kg</option>
              <option value="imperial">ft/lb</option>
            </select>
          </div>
          <label className="label">
            Height ({unit === 'metric' ? 'CM' : 'FT'}):
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="input"
              placeholder={`Enter height (${unit === 'metric' ? 'CM' : 'FT'})`}
            />
          </label>
          <label className="label">
            Weight ({unit === 'metric' ? 'KG' : 'LB'}):
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="input"
              placeholder={`Enter weight (${unit === 'metric' ? 'KG' : 'LB'})`}
            />
          </label>
          
        </div>
        <button
          onClick={calculateBMI}
          className={`button ${bmi ? 'buttonHover' : ''}`}
        >
          Calculate BMI
        </button>
        {bmi !== null && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <p className={`bmi-category ${bmiCategory.toLowerCase()}`}>
              Your BMI Category: {bmiCategory}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
```
</details>

## Launch and view your react app on the browser

1. Make sure you are in the react-app-bmi-calculator directory and start the server by executing the following command.

```
    npm start
```

2. Once you execute the above command the server will start and can be launched in the default browser using port 3000 as shown in the screenshot below.

<img src="images/bmi-result.png" width="75%"/>

The BMI Calculator application should now be accessible in your web browser.

3. Enter your height in either centimeters (CM) or feet (FT) depending on the selected unit, and your weight in either kilograms (KG) or pounds (LB) depending on the selected unit.

Click on the "Calculate BMI" button to see the result.

<img src="images/app-test.png" width="75%"/>



## Commit and push your local code to your remote git repository


1. **Check Git Status:**
   Before committing any changes, check the status of your local repository to see what files have been modified and need to be committed. Open your terminal or command prompt and navigate to your project directory after which you can execute the below command.

   ```bash
   git status
   ```

2. **Add Changes to the Staging Area:**
   Use the `git add` command to add the files you want to commit to the staging area. The `.` adds all the files that have been modified in the current working directory.

   ```bash
   git add .
   ```

3. **Set Your Git User Email and Name:**
   If you haven't already configured your email and name globally, use the `git config` command to set them.

   ```bash
   git config --global user.email "your_email@example.com"
   git config --global user.name "Your Name"
   ```

   Replace `"your_email@example.com"` with your email and `"Your Name"` with your name.

4. **Commit Changes:**
   Commit the changes in the staging area with a meaningful commit message using the `git commit` command. Replace `'Completed the code'` with a concise description of your changes.

   ```bash
   git commit -m 'Completed the code'
   ```

5. **Push to Remote Repository:**
   Push your committed changes to the remote Git repository using the `git push` command. Replace `origin` with the name of your remote repository (often "origin") and `branch_name` with the name of the branch you want to push (e.g., "main" or "master").

   ```bash
   git push origin branch_name
   ```

   If you are pushing to the default branch (e.g., "main"), you can simply use:

   ```bash
   git push origin
   ```

Congratulations! You have successfully completed the BMI Calculator application lab. With this application, users can calculate BMI in two units cm/kg and ft/lb.

## Author(s)

Nikesh Kumar

**Change Log**

| Date | Version | Changed by | Change Description |
|------|--------|--------|---------|
| 2023-09-15 | 1.0 | Nikesh Kumar | Initial version created |
| 2023-09-15 | 1.1 | Sapthashree K S | Review and Minor Updates |

## <h3 align="center"> © Skills Network 2023. All rights reserved. <h3/>
