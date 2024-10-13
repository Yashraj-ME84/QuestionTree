# QuestionTree

A platform for uploading and solving questions created by users, similar to YouTube but with a focus on academic questions instead of videos.

### Project in progress

Test link : https://rad-croquembouche-a07bc3.netlify.app/

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Updates and Change Log](#updates-and-change-log)
  - [July 2024](#july-2024)
    - [2024-07-10] - Payment Integration with Razorpay:
                      Integrated Razorpay for processing payments.
                      MongoDB tracks order status: 'pending' upon creation and 'paid' upon successful payment.
                      If the payment fails, the order is deleted.
    - [2024-07-12] - Redux State for Authentication and Out-of-Stock Alerts:
                      Added Redux state management for login checks before redirecting.
                      Implemented alert system during checkout to notify users of out-of-stock products.
  - [August 2024](#august-2024)
    - [2024-08-13] - Question Highlighting and Correctness Check:
                      Users can highlight selected questions.
                      Correct answers are highlighted green, and incorrect answers are highlighted red.
    - [2024-08-17] - Comment Section:
                      Built a fully functional comment section for questions, allowing users to comment and reply.
  - [September 2024](#september-2024)
    - [2024-09-23] - Predictive Modeling for Geotechnical Data:
                      Started working on machine learning models for geotechnical predictions using borehole data.
    - [2024-09-27] - Mongoose Schemas:
                      Designed 7 Mongoose schemas for MongoDB collections to handle data more efficiently.
  - [October 2024](#october-2024)
    - [2024-10-03] - PDF Generation and Dropbox Integration:
                      Enabled users to generate PDFs of their papers.
                      Stored generated PDFs in Dropbox and provided users with a viewable link.
                      Implemented Dropbox API with automatic access token refresh to avoid token expiration issues.
    - [2024-10-07] - "PaperMaker" Feature and UI Updates:
                      Removed unnecessary UI elements from the PaperMaker page for a cleaner design.
                      Created a neater card design for displaying user information and uploaded content.
    - [2024-10-10] - Viewable Links for Dropbox Stored PDFs:
                      Added functionality to generate public viewable links for PDFs stored in Dropbox.
                      Implemented automatic token refresh when Dropbox access tokens expire.

## Project Overview

This project provides a platform where users can upload, solve, and download academic questions and papers. Users can create questions, solve others' questions, and store their generated papers as PDFs. The project integrates a payment gateway, cloud storage, and supports token-based authentication.

## Features

- **User Authentication**: Secure user login/logout with JWT and Redux integration.
- **Question and Paper Creation**: Users can create questions and papers. The selected options are marked as correct or incorrect.
- **Comment Section**: Users can comment and reply on questions.
- **Payment Integration**: Razorpay payment gateway integration with MongoDB status tracking.
- **Out-of-Stock Notification**: Alerts users about out-of-stock products during checkout.
- **Question Highlighting and Selection**: Users can highlight and select questions for further use (implemented for `PaperMaker` page).
- **PDF Generation and Storage**: Generated questions and papers can be downloaded as PDFs.
- **Cloud Storage Integration**: Store generated PDFs in Dropbox and retrieve viewable links.
- **Caching for APIs**: Implemented caching for faster API responses (improved speed by 80%).
- **Error Handling and Token Refresh**: Automatic refresh of Dropbox access tokens upon expiration for seamless file uploads.

## Tech Stack

- **Frontend**: React, Redux, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Razorpay
- **Cloud Storage**: Dropbox API (with token refresh support)
- **File Uploads**: Multer for handling file uploads
- **PDF Generation**: HTML to PDF conversion for questions and papers

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-project.git
