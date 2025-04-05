/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: User authentication operations
 *   - name: User Data
 *     description: Operations for managing user data
 *   - name: User Search
 *     description: Operations for searching users and other entities
 *   - name: Chat Management
 *     description: Operations for managing chats and messages
 *   - name: Groups
 *     description: Operations for managing groups
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AccessResponse:
 *       type: object
 *       properties:
 *         access_type:
 *           type: string
 *           description: Type of access (login or signup)
 *           enum: [login, signup]
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *     
 *     SignupResponse:
 *       type: object
 *       properties:
 *         signed_up:
 *           type: boolean
 *           description: Whether the signup was successful
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *     
 *     LoginResponse:
 *       type: object
 *       properties:
 *         logged_in:
 *           type: boolean
 *           description: Whether the login was successful
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *     
 *     LogoutResponse:
 *       type: object
 *       properties:
 *         logged_out:
 *           type: boolean
 *           description: Whether the logout was successful
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *     
 *     SessionResponse:
 *       type: object
 *       properties:
 *         session_id:
 *           type: string
 *           description: Session ID of the authenticated user
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *     
 *     HandleResponse:
 *       type: object
 *       properties:
 *         handle_available:
 *           type: boolean
 *           description: Whether the handle is available for use
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *     
 *     InitResponse:
 *       type: object
 *       properties:
 *         init:
 *           type: boolean
 *           description: Whether the initialization was successful
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *         data:
 *           type: object
 *           description: Initial data for the client
 *     
 *     UpdateResponse:
 *       type: object
 *       properties:
 *         update:
 *           type: boolean
 *           description: Whether the update was successful
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *         data:
 *           type: object
 *           description: Updated data for the client
 *     
 *     SearchResponse:
 *       type: object
 *       properties:
 *         searched_list:
 *           type: array
 *           description: List of search results
 *           items:
 *             type: object
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *     
 *     MessageResponse:
 *       type: object
 *       properties:
 *         message_sent:
 *           type: boolean
 *           description: Whether the message was sent successfully
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *         message_data:
 *           type: object
 *           description: Data about the sent message
 *     
 *     CreateChatResponse:
 *       type: object
 *       properties:
 *         chat_created:
 *           type: boolean
 *           description: Whether the chat was created successfully
 *         chat_id:
 *           type: string
 *           description: ID of the created chat
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *     
 *     CreateGroupResponse:
 *       type: object
 *       properties:
 *         group_created:
 *           type: boolean
 *           description: Whether the group was created successfully
 *         chat_id:
 *           type: string
 *           description: ID of the created group chat
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *     
 *     MembersResponse:
 *       type: object
 *       properties:
 *         members_list:
 *           type: array
 *           description: List of members in the chat
 *           items:
 *             type: object
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *     
 *     JoinGroupResponse:
 *       type: object
 *       properties:
 *         group_joined:
 *           type: boolean
 *           description: Whether the user joined the group successfully
 *         error_message:
 *           type: string
 *           description: Error message if applicable
 *         data:
 *           type: object
 *           description: Data about the joined group
 */

/**
 * @swagger
 * /v1/user/auth/access:
 *   get:
 *     summary: Check access type for email
 *     description: Determines if the email is for an existing user (login) or a new user (signup)
 *     tags: [Authentication]
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: User's email address
 *     responses:
 *       200:
 *         description: Access type determined successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AccessResponse'
 *       400:
 *         description: Invalid email format
 *       500:
 *         description: Server error
 *   post:
 *     summary: Check access type for email
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address
 *             required:
 *               - email
 *     responses:
 *       200:
 *         description: Access type determined successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AccessResponse'
 *       400:
 *         description: Invalid email format
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/user/auth/signup:
 *   get:
 *     summary: Register a new user
 *     description: Create a new user account with the provided information
 *     tags: [Authentication]
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: User's email address
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: User's first name
 *       - in: query
 *         name: surname
 *         required: true
 *         schema:
 *           type: string
 *         description: User's last name
 *       - in: query
 *         name: handle
 *         required: true
 *         schema:
 *           type: string
 *         description: User's unique handle
 *       - in: query
 *         name: password
 *         required: true
 *         schema:
 *           type: string
 *         description: User's password
 *     responses:
 *       200:
 *         description: Signup successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SignupResponse'
 *       400:
 *         description: Invalid input parameters
 *       500:
 *         description: Server error
 *   post:
 *     summary: Register a new user
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *               handle:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - name
 *               - surname
 *               - handle
 *               - password
 *     responses:
 *       200:
 *         description: Signup successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SignupResponse'
 *       400:
 *         description: Invalid input parameters
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/user/auth/login:
 *   get:
 *     summary: Authenticate a user
 *     description: Log in a user with email and password. Returns a token for session authentication.
 *     tags: [Authentication]
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: User's email address
 *       - in: query
 *         name: password
 *         required: true
 *         schema:
 *           type: string
 *         description: User's password
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 logged_in:
 *                   type: boolean
 *                   description: Whether the login was successful
 *                 token:
 *                   type: string
 *                   description: Authentication token to be used for session authentication
 *                 error_message:
 *                   type: string
 *                   description: Error message if applicable
 *       400:
 *         description: Invalid input parameters
 *       401:
 *         description: Authentication failed
 *       500:
 *         description: Server error
 *   post:
 *     summary: Authenticate a user
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 logged_in:
 *                   type: boolean
 *                   description: Whether the login was successful
 *                 token:
 *                   type: string
 *                   description: Authentication token to be used for session authentication
 *                 error_message:
 *                   type: string
 *                   description: Error message if applicable
 *       400:
 *         description: Invalid input parameters
 *       401:
 *         description: Authentication failed
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/user/auth/logout:
 *   get:
 *     summary: Log out a user
 *     description: End the current user session
 *     tags: [Authentication]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Logout successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LogoutResponse'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 *   post:
 *     summary: Log out a user
 *     description: Same as GET
 *     tags: [Authentication]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Logout successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LogoutResponse'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/user/auth/session:
 *   get:
 *     summary: Get session information (DEPRECATED)
 *     description: >
 *       DEPRECATED - This endpoint will be removed in the next version. Use the token returned by the login endpoint instead.
 *       Retrieve information about the current session.
 *     tags: [Authentication]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Session information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SessionResponse'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 *   post:
 *     summary: Get session information (DEPRECATED)
 *     description: >
 *       DEPRECATED - This endpoint will be removed in the next version. Use the token returned by the login endpoint instead.
 *       Same as GET.
 *     tags: [Authentication]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Session information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SessionResponse'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/user/data/check/handle-availability:
 *   get:
 *     summary: Check handle availability
 *     description: Check if a handle is available for use
 *     tags: [User Data]
 *     parameters:
 *       - in: query
 *         name: handle
 *         required: true
 *         schema:
 *           type: string
 *         description: Handle to check
 *     responses:
 *       200:
 *         description: Handle availability checked successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HandleResponse'
 *       400:
 *         description: Invalid handle format
 *       500:
 *         description: Server error
 *   post:
 *     summary: Check handle availability
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [User Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               handle:
 *                 type: string
 *             required:
 *               - handle
 *     responses:
 *       200:
 *         description: Handle availability checked successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HandleResponse'
 *       400:
 *         description: Invalid handle format
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/user/data/get/init:
 *   get:
 *     summary: Initialize client data
 *     description: Retrieve initial data for the client
 *     tags: [User Data]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Initialization successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InitResponse'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 *   post:
 *     summary: Initialize client data
 *     description: Same as GET
 *     tags: [User Data]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Initialization successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InitResponse'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/user/data/get/update:
 *   get:
 *     summary: Get updates
 *     description: Retrieve updates since a specified datetime
 *     tags: [User Data]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: latest_update_datetime
 *         required: true
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Timestamp of the latest update the client has
 *     responses:
 *       200:
 *         description: Update successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateResponse'
 *       400:
 *         description: Invalid datetime format
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 *   post:
 *     summary: Get updates
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [User Data]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               latest_update_datetime:
 *                 type: string
 *                 format: date-time
 *             required:
 *               - latest_update_datetime
 *     responses:
 *       200:
 *         description: Update successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateResponse'
 *       400:
 *         description: Invalid datetime format
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/user/data/search/users:
 *   get:
 *     summary: Search users
 *     description: Search for users by handle
 *     tags: [User Search]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: handle
 *         required: true
 *         schema:
 *           type: string
 *         description: Handle to search for
 *     responses:
 *       200:
 *         description: Search successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SearchResponse'
 *       400:
 *         description: Invalid handle format
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 *   post:
 *     summary: Search users
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [User Search]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               handle:
 *                 type: string
 *             required:
 *               - handle
 *     responses:
 *       200:
 *         description: Search successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SearchResponse'
 *       400:
 *         description: Invalid handle format
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/user/data/search/all:
 *   get:
 *     summary: Search all entities
 *     description: Search for users, groups, and channels by handle
 *     tags: [User Search]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: handle
 *         required: true
 *         schema:
 *           type: string
 *         description: Handle to search for
 *     responses:
 *       200:
 *         description: Search successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SearchResponse'
 *       400:
 *         description: Invalid handle format
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 *   post:
 *     summary: Search all entities
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [User Search]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               handle:
 *                 type: string
 *             required:
 *               - handle
 *     responses:
 *       200:
 *         description: Search successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SearchResponse'
 *       400:
 *         description: Invalid handle format
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/chat/send/message:
 *   get:
 *     summary: Send a message
 *     description: Send a text message to a chat
 *     tags: [Chat Management]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: text
 *         required: true
 *         schema:
 *           type: string
 *         description: Message text
 *       - in: query
 *         name: chat_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the chat to send the message to
 *     responses:
 *       200:
 *         description: Message sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       400:
 *         description: Invalid input parameters
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 *   post:
 *     summary: Send a message
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [Chat Management]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               chat_id:
 *                 type: string
 *             required:
 *               - text
 *               - chat_id
 *     responses:
 *       200:
 *         description: Message sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       400:
 *         description: Invalid input parameters
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/chat/create/chat:
 *   get:
 *     summary: Create a new chat
 *     description: Create a new direct chat with another user
 *     tags: [Chat Management]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: handle
 *         required: true
 *         schema:
 *           type: string
 *         description: Handle of the user to create a chat with
 *     responses:
 *       200:
 *         description: Chat created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateChatResponse'
 *       400:
 *         description: Invalid handle format
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 *   post:
 *     summary: Create a new chat
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [Chat Management]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               handle:
 *                 type: string
 *             required:
 *               - handle
 *     responses:
 *       200:
 *         description: Chat created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateChatResponse'
 *       400:
 *         description: Invalid handle format
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/chat/create/group:
 *   get:
 *     summary: Create a new group
 *     description: Create a new group chat
 *     tags: [Groups]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the group
 *       - in: query
 *         name: handle
 *         required: false
 *         schema:
 *           type: string
 *         description: Handle for the group (if public)
 *       - in: query
 *         name: description
 *         required: false
 *         schema:
 *           type: string
 *         description: Description of the group
 *       - in: query
 *         name: members
 *         required: false
 *         schema:
 *           type: string
 *         description: Comma-separated list of member handles
 *     responses:
 *       200:
 *         description: Group created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateGroupResponse'
 *       400:
 *         description: Invalid input parameters
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 *   post:
 *     summary: Create a new group
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [Groups]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               handle:
 *                 type: string
 *               description:
 *                 type: string
 *               members:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Group created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateGroupResponse'
 *       400:
 *         description: Invalid input parameters
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/chat/get/members:
 *   get:
 *     summary: Get chat members
 *     description: Retrieve the members of a chat
 *     tags: [Chat Management]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: chat_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the chat
 *     responses:
 *       200:
 *         description: Members retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MembersResponse'
 *       400:
 *         description: Invalid chat ID
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 *   post:
 *     summary: Get chat members
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [Chat Management]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               chat_id:
 *                 type: string
 *             required:
 *               - chat_id
 *     responses:
 *       200:
 *         description: Members retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MembersResponse'
 *       400:
 *         description: Invalid chat ID
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /v1/chat/join/group:
 *   get:
 *     summary: Join a group
 *     description: Join a public group by handle
 *     tags: [Groups]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: handle
 *         required: true
 *         schema:
 *           type: string
 *         description: Handle of the group to join
 *     responses:
 *       200:
 *         description: Group joined successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JoinGroupResponse'
 *       400:
 *         description: Invalid handle format
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 *   post:
 *     summary: Join a group
 *     description: Same as GET, but accepts parameters in the request body
 *     tags: [Groups]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               handle:
 *                 type: string
 *             required:
 *               - handle
 *     responses:
 *       200:
 *         description: Group joined successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JoinGroupResponse'
 *       400:
 *         description: Invalid handle format
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */