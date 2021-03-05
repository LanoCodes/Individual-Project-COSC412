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
#### Project Organization
#### Managerial Process
#### Technical Process
#### Description of Work Packages
