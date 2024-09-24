# Frontend Developer Coding Challenge

## Task: 
You are tasked with building a mini-invoicing dashboard. Your goal is to create a responsive web app that allows users to view and manage invoices. The design should be simple, clean, and aligned with the branding of Attelas.ai (you can take inspiration from the design at Attelas.ai). 

## Requirements: 

### 1. Invoices List Page: 

Display a list of invoices. 

Each invoice should display basic details such as: 

Invoice Number 

Client Name 

Total Amount Due 

Due Date 

Status (Paid, Pending, Overdue) 

Clicking on an individual invoice should open the Invoice Details Page (see below). 

The data should be fetched from here:  

https://attelasstorageoutlookdev.blob.core.windows.net/codetest/invoices-attelas.json 

https://attelasstorageoutlookdev.blob.core.windows.net/codetest/clients-attelas.json 

### 2. Invoice Details Page: 

Display full details of a selected invoice 

Include a "Chase" button that opens a dialog (see below) 

### 3. Chase feature: 

Clicking this button should generate a fake email preview (in a dialog) that looks like a well-formatted email reminder to the client, including the following information: 

Client name 

Invoice number and amount due 

Due date 

A polite message reminding the client to pay 

This email doesn’t need to actually send, just show a preview. 

## Technical Requirements: 

Use React with Typescript. 

The design should be responsive and work well on desktop and mobile. 

You are free to use a UI component library (e.g., Material UI, Bootstrap). 

The code quality should be production ready, but it is very important that you keep it simple. 


## Submission: 

Please submit a link to a GitHub repository with your solution, including a brief README.md file on how to run the project. 

Bonus points for clean, maintainable code and attention to UI/UX. 
