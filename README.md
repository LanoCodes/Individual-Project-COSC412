### Requirements: 
1. The user should be able to press a button to generate a restaurant in one click/touch.
2. Interface should be very simply designed and very streamlined in presenting the restaurant information.
3. System should be able to get user's location data, or allow user to type in a city and state. 
4. System should be able to take user to restaurant's Yelp page after restaurant has been generated.

### Use Cases:
![Use Case Diagram - Individual](https://user-images.githubusercontent.com/69657272/112183043-3dbc2480-8bd4-11eb-8d54-3aa09ac380b7.png)


| Name           |  Input Location |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID             | uc01  |
| Description    | The user will input their location in a city, state-abrreviation format |
| Triggers       | User choosing to input a location, rather than just being geolocated by the system|
| Postconditions | User's location data will then be used to generate the restaurant|
| Main Course    | System prompts the user to enter a location from which to generate a restaurant from.            |

| Name           | Generate a Restaurant                                                                                                                |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| ID             | uc02                                                                                                                                      |
| Description    | The user prompts the system to begin generation of the restaurant                                                                         |
| Triggers       | Clicking button that indicates initiation of roulette       |
| Postconditions | System will have prepared a generated restaurant for the user to view                                                                     |
| Main Course    | System presents a button that will serve to initiate restaurant generation for the user |

| Name           | Access Yelp Page of Generated Restaurant                                                                                           |
|----------------|----------------------------------------------------------------------------------------------------------------|
| ID             | uc03                                                                                                           |
| Description    | The system will give users a clickable link to access Yelp page of restaurant that was generated                       |
| Triggers       | Restaurant being generated                                                                                                |
| Postconditions | User will now have option to view yelp page of the generated restaurabt in its entirety                         |
| Main Course    | System displays link upon generation of resataurant which will take the user to the Yelp page once clicked |



### SPMP *(Software Project Management Plan)*
<details>
  <summary>Contents</summary>
    
  1. [Introduction](https://github.com/LanoCodes/Individual-Project-COSC412/blob/main/README.md#introduction)
  2. [Project Organization](https://github.com/LanoCodes/Individual-Project-COSC412/blob/main/README.md#project-organization)
  3. [Managerial Process](https://github.com/LanoCodes/Individual-Project-COSC412/blob/main/README.md#managerial-process)
  4. [Technical Process](https://github.com/LanoCodes/Individual-Project-COSC412/blob/main/README.md#technical-process)
  5. [Description of Work Packages](https://github.com/LanoCodes/Individual-Project-COSC412/blob/main/README.md#description-of-work-packages)
  
</details>

#### Introduction
1. Project Overview
>The purpose of this system is to be able to take the fuss out of picking a new place to ea and give the user a restaurant nearby that they "must" go to. It will not allow the user to choose any preferences about the restaurant beforehand, such as the type of food served, whether or not it has a bar, etc. Instead, the user's location will be determined, or the user will specify a city and and have a restaurant be picked for them.
2. Project Deliverables
- All items to be delivered, including delivery dates and location
- Items to be delivered:
    -  Class Diagram
    -  Use Cases
    -  Tool Rundown
    -  Cost(s) to build
3. Evolution of the SPMP
- Should the system be a success and more features/pivots in function become wanted:
    -  
- If costs to run/host/test project becomes exorbitant:
    -  Update professor immediately and seek alternative demonstration methods to alleviate burden. Though, being the GitHub offers the ability to host projects, this may not be a major concern.
  

4. Reference Materials 
- Tentative:
    -  Reference link to any possible python library
    -  Reference links to selenium
    -  Reference links to any project guides used

5. Definition and Acronyms
- SPMP: Software Project Management Plan
- “The System”: Refers to the piece of software we intend to build

#### Project Organization
1. Process Model
  - Agile process model
    - ![Agile Development Diagram](https://user-images.githubusercontent.com/69657272/112192422-4fee9080-8bdd-11eb-8f2e-a64335fce865.png)

2. Organizational Structure
- Delano Powell, student, is the one in charge project facets. 
  - Reports to course professor, as this project is in development on assignment for school
- General Project oversight comes from the Professor

3. Organizational Interfaces
- GitHub 
  - GihHub is the proposed hosting service 
- Yelp
  -  Yelp is the provider for the API that will be used for the core of this project

4. Project Responsibilities
- Delano Powell is in charge of all duties, deliverables, and project overall

#### Managerial Process
1. Management Objectives
- Management Philosophy:
    - Committed to doing the best job possible in the time allotted
    - Personal accountability should be the root of everything done throughout the project
    - Meet mistakes/errors often as necessary, early.

2.  Assumptions, Dependencies, and Constraints
  - Constraints:
    - There will be limit on how many times the app will be able to run using my personal credentials when the app is live. However, the amount of people exposed to this app will likely only spread to everyone in class at most. That is well within range for demonstration.
  - Dependencies: 
    - The app is entirely dependent on Yelp's Fusion API. Should that crash/fail, there will bbe no alternative.

3. Risk Management
- Scope Creep:
  -  In an effort to mitigate potential scope creep, I will strive for an agile process that truly refuses to tack on new features until the project has completed a working iteration.

4. Monitoring and Controlling Mechanisms
- Gantt Chart:
  -  The Gantt Chart for this project will be the primary mode of tracking progress and controlling development rate

5. Staffing Plan
- As mentioned, all positions relevant to this project is the sold responsibility of Delano Powell
  -  Staff total: 1
    -  Staff: Delano Powell

#### Technical Process
1. Methods, Tools, and Techniques
- Tools: 
    - Yelp's Fusion API
    - GitHub Pages
    - Node.js
    - HTML5, CSS, JS
- Techniques:
  -  

2. Software Documentation
- A full breakdown of the reasoning behind choice of method, tools, and techniques to follow:
    - tentative
3. Project Support Functions
- Plan to ensure quality assurance:
    - Tentative: Establishing an email link for consumers to provide feedback
- (?) Configuration management plan (IEEE Std 1042)
    - Tentative
- Verification and Validation plan
    - Tentative: Some mechanism to record and report system failures as they occur

#### Description of Work Packages
1. Work Breakdown Structure(WBS):
- Tentative:
2. Dependencies Between Tasks
- Tentative:


