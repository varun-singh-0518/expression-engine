
# Expression Engine UI

It provides a user interface for creating and managing expression rules. The user can define rules with various attributes such as rule type, operator, value, and score. The rules can be combined using either "AND" or "OR" connectors.


## Screenshots

![App Screenshot](https://i.postimg.cc/9ftY5psH/Screenshot-2024-01-23-152457.png)

![App Screenshot](https://i.postimg.cc/L4rYDP0t/Screenshot-2024-01-23-152523.png) 


# Features

- Connector Type: Allows users to select the connector type ("AND" or "OR") to combine multiple rules.

### Rule Configuration:
- Rule Type: Choose from predefined rule types (e.g., Age, Credit Score, Account Balance).
- Operator: Select an operator for the rule (e.g., ">", "<", ">=", "<=", "=").
- Value: Enter the value associated with the rule.
- Score: Enter a score related to the rule.
### Expression Management:
- Add Expression: Click the "Add Expression" button to add a new expression rule.
- Delete Expression: Remove a specific expression rule by clicking the "Delete Expression" button.
### Output
- Displays the JSON representation of the configured rules and connector type.


## Run Locally

Clone the project

```bash
  git clone https://github.com/varun-singh-0518/expression-engine.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

