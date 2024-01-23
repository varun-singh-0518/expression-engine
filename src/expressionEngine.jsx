import React, {useState} from "react";
import {Button, Form, Container, Row, Col, Dropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ExpressionEngineUI = () => {
  const [connector, setConnector] = useState("AND");

  const [rules, setRules] = useState([
    {key: "age", output: {value: "", operator: "", score: ""}},
  ]);

  // function to add an expression
  const handleAddExpression = () => {
    setRules([
      ...rules,
      {key: "age", output: {value: "", operator: "", score: ""}},
    ]);
  };

  // replacer for JSON to replace the string values into numbers
  const numericReplacer = (key, value) => {
    if (key === "value" || key === "score") {
      return isNaN(Number(value)) ? value : Number(value);
    }
    return value;
  };

  // function to delete the selected expression
  const handleDeleteExpression = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  // to change the connector type
  const handleChangeConnector = (selectedConnector) => {
    setConnector(selectedConnector);
  };

  //update rules on the basis of selcted input
  const handleChangeExpression = (index, field, value) => {
    const updatedRules = [...rules];
    updatedRules[index] = {
      ...updatedRules[index],
      output: {...updatedRules[index].output, [field]: value},
    };
    setRules(updatedRules);
  };

  // function to update the key value
  const handleChangeExpressionKey = (index, selectedKey) => {
    const updatedRules = [...rules];
    updatedRules[index] = {
      key: selectedKey,
      output: {value: "", operator: "", score: ""},
    };
    setRules(updatedRules);
  };

  return (
    <Container>
      <h2 className="mt-3 mb-4">Expression Engine UI</h2>
      <Form>
        <Form.Group controlId="connectorType">
          <Form.Label>Connector Type</Form.Label>
          <Dropdown onSelect={handleChangeConnector}>
            <Dropdown.Toggle
              variant="dark"
              id="dropdown-basic"
              className="mb-2"
            >
              {connector}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="AND">AND</Dropdown.Item>
              <Dropdown.Item eventKey="OR">OR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        {rules.map((rule, index) => (
          <div key={index} className="mb-4 p-3 border rounded">
            <h4>Expression {index + 1}</h4>
            <Row>
              <Col md={6}>
                <Form.Group controlId={`expression.${index}.ruleType`}>
                  <Form.Label>Rule Type</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) =>
                      handleChangeExpressionKey(index, e.target.value)
                    }
                  >
                    <option value="age">Age</option>
                    <option value="credit_score">Credit Score</option>
                    <option value="account_balance">Account Balance</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId={`expression.${index}.operator`}>
                  <Form.Label>Operator</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) =>
                      handleChangeExpression(index, "operator", e.target.value)
                    }
                  >
                    <option value=">">{">"}</option>
                    <option value="<">{"<"}</option>
                    <option value=">=">{">="}</option>
                    <option value="<=">{"<="}</option>
                    <option value="=">{"="}</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId={`expression.${index}.value`}>
                  <Form.Label>Value</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter value"
                    value={rule.output.value}
                    onChange={(e) =>
                      handleChangeExpression(index, "value", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId={`expression.${index}.score`}>
                  <Form.Label>Score</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter score"
                    value={rule.output.score}
                    onChange={(e) =>
                      handleChangeExpression(index, "score", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button
              variant="danger"
              onClick={() => handleDeleteExpression(index)}
              className="mt-2"
            >
              Delete Expression
            </Button>
          </div>
        ))}

        <Button variant="primary" onClick={handleAddExpression}>
          Add Expression
        </Button>
      </Form>

      <h3 className="mt-4">Output</h3>
      {/* to convert the object into a formatted JSON string.  */}
      <pre>
        {JSON.stringify({rules, combinator: connector}, numericReplacer, 2)}
      </pre>
    </Container>
  );
};

export default ExpressionEngineUI;
