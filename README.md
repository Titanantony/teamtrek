**TeamTrek - Student-Centered Collaboration App**
=================================================

TeamTrek is a Jira plugin designed to revolutionize the way students collaborate on group projects. By integrating task allocation, progress tracking, deadline reminders, and document sharing, TeamTrek makes teamwork more seamless, organized, and efficient.

**Key Features**
----------------

*   **Task Allocation**: Assign tasks to group members, ensuring clarity and accountability.
    
*   **Deadline Reminders**: Automatic notifications to prevent missed deadlines.
    
*   **Progress Tracking**: Visualize the status of tasks and overall project progress.
    
*   **Shared Study Notes**: Seamless integration with Confluence for creating, sharing, and managing study notes and research documents.
    
*   **Workload Distribution**: Ensure balanced task assignments among team members.
    
*   **Meeting Scheduling**: Schedule group meetings with reminders and integrated action points.
    
*   **Custom Dashboards**: Provide a high-level overview of tasks, deadlines, and overall progress.
    

**Technologies Used**
---------------------

*   **Atlassian Forge**: A serverless app development platform for building and deploying Jira and Confluence apps.
    
*   **Jira API**: Used to extend and customize Jira functionality for managing tasks and deadlines.
    
*   **Confluence API**: Enables integration for shared study notes and documentation.
    
*   **React**: For creating a custom user interface in the app.
    
*   **Node.js**: For backend logic and API handling within the Forge app.
    
*   **Forge Storage API**: To securely store and retrieve data.
    
*   **AWS Lambda (via Forge)**: For scalable and reliable serverless backend operations.
    

**Project Tree Structure**
--------------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   plaintextCopy codeteamtrek/  │  ├── forge-app/  │   ├── manifest.yml             # Forge app configuration  │   ├── src/  │   │   ├── index.js             # Backend logic for Forge app  │   │   ├── components/  │   │   │   ├── IssueAction.js   # Custom Jira issue action logic  │   │   │   ├── Dashboard.js     # Custom dashboard integration  │   │   └── util/  │   │       └── helpers.js       # Utility functions  │   ├── static/                  # Static assets (e.g., images, icons)  │   └── package.json             # Node.js dependencies  │  ├── react-ui/  │   ├── public/  │   │   └── index.html           # Main HTML file for React app  │   ├── src/  │   │   ├── App.js               # Main React app logic  │   │   ├── components/  │   │   │   ├── TaskList.js      # Task list UI component  │   │   │   ├── ProgressTracker.js # Progress tracking component  │   │   └── styles/  │   │       └── app.css          # CSS styles for the app  │   └── package.json             # React app dependencies  │  └── README.md                    # Project documentation   `

**Getting Started**
-------------------

### **Prerequisites**

1.  Atlassian account with access to Jira and Confluence (Free Tier works).
    
2.  Node.js and npm installed locally.
    
3.  Atlassian Forge CLI installed. Follow the Forge Setup Guide.
    

### **Installation**

1.  bashCopy codegit clone https://github.com/your-username/teamtrek.git
    
2.  bashCopy codecd teamtrek/forge-app
    
3.  bashCopy codenpm install
    
4.  bashCopy codeforge deploy
    
5.  bashCopy codecd ../react-ui
    
6.  bashCopy codenpm install
    
7.  bashCopy codenpm start
    

**Usage**
---------

### **For Users**

*   Log in to your Jira workspace and install the TeamTrek app via the installation link.
    
*   Use the app to create, allocate, and track tasks.
    
*   Collaborate seamlessly using shared study notes in Confluence.
    

### **For Developers**

*   Modify the app components in the forge-app/src/ and react-ui/src/ directories.
    
*   Use forge tunnel to test Forge app changes in real-time.
    

**Contributing**
----------------

Contributions are welcome! Please fork the repository and submit a pull request. Ensure that your changes align with the project's scope and pass all existing tests.

**License**
-----------

This project is licensed under the MIT License. See the LICENSE file for more details.

**Acknowledgments**
-------------------

*   Atlassian for providing the Forge platform and APIs.
    
*   AWS for powering the serverless backend.
    
*   All students who inspired the development of this app by sharing their challenges in group projects.