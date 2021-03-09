### Purpose: 
>*The purpose of this system is to be able to make a very quick purchase, with particular focus being pointed at purchasing footwear. Not intended to be a “catch-all," being able to hit any site, but this project is aimed at implementing a system that allows for a purchase of a shoe from some specific site not yet determined*
> - *`(Site to be chosen at another point in the project. Cite: Recent Nike news may prompt more security things to jump over)`*



### Requirements: 
1. Users should be able to enter necessary information:
    - Their payment/billing information
    - Their shipping information
    - Their email addresses
2. Interface should be extremely straightforward and not cluttered
3. System should be able to put the user’s information to use on the site in question where the purchase is to be made and then make the purchase
4. System should be able to email the user all of the order information for the purchase
5. It should securely use user information

### Use Cases:
![5A94D90E-DA3B-43CB-B8AB-D0478353FF0B](https://user-images.githubusercontent.com/69657272/110041371-00215580-7d12-11eb-8c71-2a93875712b3.jpeg)

| Name           | Upload payment/billing information                                                                                                                                     |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID             | uc01                                                                                                                                                                   |
| Description    | The user inputs their payment information, such as card number, cvv, and zip code for that card. Then, the user enters their billing address associated with that card |
| Triggers       | Opening the app                                                                                                                                                        |
| Postconditions | User’s payment information is now able to used towards a purchase                                                                                                      |
| Main Course    | System prompts the user to enter their payment information. User fills out all of the necessary information System temporarily stores user information                 |

| Name           | Upload shipping information                                                                                                               |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| ID             | uc02                                                                                                                                      |
| Description    | The user inputs the shipping information for the coming purchase                                                                          |
| Triggers       | Opening the app                                                                                                                           |
| Postconditions | User’s shipping information is now able to used towards a purchase                                                                        |
| Main Course    | System prompts the user to enter their address User fills out all of the necessary information System temporarily stores user information |

| Name           | Input email address                                                                                            |
|----------------|----------------------------------------------------------------------------------------------------------------|
| ID             | uc03                                                                                                           |
| Description    | The user inputs their email address in order to be sent their order confirmation details                       |
| Triggers       | Opening the app                                                                                                |
| Postconditions | User’s email address information is now able to used when sending confirmation details                         |
| Main Course    | System prompts the user to enter their email. User inputs the email System temporarily stores user information |

| Name           | Specify item                                                                                                                                    |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| ID             | uc04                                                                                                                                            |
| Description    | The user specifies the item and that they are looking to purchase                                                                               |
| Triggers       | Opening the app                                                                                                                                 |
| Postconditions | The item is now the target of the purchase to come                                                                                              |
| Main Course    | System prompts the user to enter the specified item. User fills out all of the necessary information System temporarily stores user information |

| Name              | Make purchase                                                                               |
|-------------------|---------------------------------------------------------------------------------------------|
| ID                | uc05                                                                                        |
| Description       | Using the previously acquired information, the system attempts a purchase of the item       |
| Triggers          | Opening the app                                                                             |
| Postconditions    | The item in question is now purchased and the user is sent confirmation via email           |
| Main Course       | System makes a purchase of the user’s item of choice. *AC1                                  |
| Alternate Courses | AC1 System is unable to purchase System notifies user that the purchase does not go through |

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
>The purpose of this system is to be able to make a very quick purchase, with particular focus being pointed at purchasing footwear. Not intended to be a “catch-all," being able to hit any site, but this project is aimed at implementing a system that allows for a purchase of a shoe from some specific site not yet determined
2. Project Deliverables
- All items to be delivered, including delivery dates and location
- Items to be delivered:
    -  Class Diagram
    -  Use Cases
    -  Tool Rundown
    -  Estimated costs breakdown
    -  Cost(s) to consumer
    -  Cost(s) to build
3. Evolution of the SPMP
- Should it become unlawful to develop the system:
    -  The project should pivot from being software that aims to make an immediate pivot in redesign and refocus to another purpose entirely
- If costs to run/host/test project becomes exorbitant:
    -  Update professor immediately and seek alternative demonstration methods to alleviate burden

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
- Tenative:
    - Waterfall process model
    - ![Waterfall Model Diagram](https://user-images.githubusercontent.com/69657272/110476482-04ea5e80-80b0-11eb-9746-55462d44a335.png)

2. Organizational Structure
- Product Owner, Project Manager, Developer, & Tester: Delano Powell

3. Organizational Interfaces
- Tentative:
    - Name of Hosting Platform:

4. Project Responsibilities
- Delano Powell is in charge of most, if not all, responsibilities associated with this project

#### Managerial Process
1. Management Objectives
- Management Philosophy:
    - Make a commitment to do the best job possible in the time allotted
    - Personal accountability should be the root of everything done
    - Honesty is the best policy, be realistic about project standings

2.  Assumptions, Dependencies, and Constraints
- External constraints:
    - The system may be subjected to defences towards this type of project on various site(s) the project may target, and navigating those defences may be questionable legality
    - Time constraints, the idea of the project in full, really is a fully fledged one. That stated, while the 2-month timeframe may prove ambitious to be fully rolled out and bug-free. Striving towards it is the goal in mind

3. Risk Management
- Tentative:

4. Monitoring and Controlling Mechanisms
- Tentative:

5. Staffing Plan
- Sole responsibility belongs to Delano Powell

#### Technical Process
1. Methods, Tools, and Techniques
- Methods:
    - tentative
- Tools: 
    - tentative
- Techniques: 
    - tentative

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


