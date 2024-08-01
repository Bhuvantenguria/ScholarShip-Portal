

# Shadow Scholarship Portal

This project is a Scholarship Portal built using the MERN (MongoDB, Express, React, Node.js) stack. The portal allows students to browse, apply for, and stay informed about various scholarships. It also sends email notifications using Nodemailer to keep users updated about new scholarship opportunities and application statuses.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Secure sign-up, login, and account management for students and administrators.
- **Scholarship Listings**: Browse and search for available scholarships based on various criteria.
- **Application Management**: Students can apply for scholarships and track their application status.
- **Email Notifications**: Automated email notifications sent to users for new scholarships, application updates, and other important alerts using Nodemailer.
- **Admin Dashboard**: Admins can manage scholarships, view applications, and send notifications.

## Technologies Used

- **Frontend**: React, React Router, Redux (or Context API for state management), Material-UI (or Tailwind CSS) for styling.
- **Backend**: Node.js, Express.js, MongoDB for the database, Mongoose for ORM.
- **Authentication**: JSON Web Tokens (JWT) for secure authentication.
- **Email Notifications**: Nodemailer for sending emails.
- **Hosting**: (optional) Deployed on platforms like Heroku, Netlify, Vercel, or any cloud service.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/scholarship-portal.git
    cd scholarship-portal
    ```

2. **Install dependencies for both frontend and backend**:
    ```bash
    # For backend
    cd backend
    npm install
    
    # For frontend
    cd ../frontend
    npm install
    ```

3. **Start the development servers**:
    ```bash
    # For backend
    cd backend
    npm run dev
    
    # For frontend
    cd ../frontend
    npm start
    ```

## Configuration

1. **Backend Configuration**:

   - Create a `.env` file in the `backend` directory and add the following environment variables:
   
    ```env
    MONGO_URI=your_mongo_database_uri
    JWT_SECRET=your_jwt_secret
    NODEMAILER_HOST=smtp.your-email-provider.com
    NODEMAILER_PORT=587
    NODEMAILER_USER=your_email@example.com
    NODEMAILER_PASS=your_email_password
    ```

2. **Frontend Configuration**:

   - Update the API endpoints in the frontend files (if necessary) to point to your backend server.

## Usage

1. **User Sign-up/Login**:
   - Users can create an account, log in, and access their personalized dashboard.

2. **Browse Scholarships**:
   - Users can browse and search for scholarships, filter results, and view detailed information about each scholarship.

3. **Apply for Scholarships**:
   - Users can apply for scholarships directly through the portal and upload necessary documents.

4. **Email Notifications**:
   - Users receive email notifications about new scholarships, upcoming deadlines, and updates on their application status.

5. **Admin Panel**:
   - Admins can log in to manage scholarships, view applications, and send custom notifications to users.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries or feedback, please contact:

- Name: Bhuvan Tenguria
- Email: bhuvantenguria37@gmail.com
