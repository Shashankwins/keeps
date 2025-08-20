package com.example;

import java.util.ArrayList;
import java.util.List;

public class App {
    private List<String> list = new ArrayList<>(); // Unused field (Sonar: "Remove this unused field")

    public String greet() {
        return "Hello, SonarQube!";
    }

    // BUG: Possible division by zero
    public int divide(int a, int b) {
        return a / b; // Sonar: "Make sure this division can't be zero"
    }

    // CODE SMELL: Hardcoded credentials
    public String getDbPassword() {
        return "admin123"; // Sonar: "Remove hardcoded password"
    }

    // VULNERABILITY: SQL injection risk
    public String buildQuery(String userInput) {
        return "SELECT * FROM users WHERE name = '" + userInput + "'"; // Sonar: "Use parameterized queries"
    }
}

