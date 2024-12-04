# Cypress Automation

## Overview

This project automates testing for a web-based email editor using Cypress. The test ensures that text properties (font size and font family) can be modified and validates the exported HTML to confirm the changes.

## Features

- Modify font size and font family.
- Export and verify HTML for changes.
- Validate text property updates with assertions.

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- Cypress installed globally or locally in the project.

### Steps

1. Clone the repository, install dependencies, and run the tests:
   ``` bash

   # Clone the repository
   git clone <repository_url>

    # Navigate into the project directory
    cd <repository_name>

    # Install the project dependencies
    npm install

    # Open the Cypress Test Runner
    npx cypress open

   ```
2. From the Cypress Test Runner, select and run the emailEditorTest.cy.js test file.

### How It Works
1. Open Email Editor:
- Visits the email editor page.
2.  Modify Text Properties:
- Changes the font size to 40px.
- Updates the font family to Andale Mono.
3. Export HTML:
- Clicks the Export HTML button to generate the modified email template.
4. Assertions:
- Confirms the applied font size and font family using CSS assertions.


### Notes
1. Font properties can be customized in emailEditorTest.cy.js for different scenarios.
2. Ensure dependencies are installed properly before running the tests.
