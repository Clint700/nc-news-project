News API Project

Overview

This project is a simple News API designed to provide users with a platform to browse, filter, and interact with news articles. Users can read articles, filter them by topic, view comments, and interact with the content by posting comments and upvoting articles. A simplified user system is used, with one logged-in user for demonstration purposes.

Features

	1.	News Articles
	•	View a list of news articles, sortable by popularity (based on votes).
	•	Filter articles by topics, so users can browse articles that match their specific interests.
	•	View individual articles, complete with their full content, comments, and vote counts.
	2.	Comments
	•	Users can view comments posted on each article to participate in ongoing discussions.
	•	Logged-in users can post new comments on any article.
	•	Users can delete their own comments to manage their contributions.
	3.	User Interactions
	•	Users can upvote articles and comments to promote content they find interesting.
	•	The API uses a simplified fixed logged-in user for simplicity (expandable for full authentication in the future).

Data Structure

	•	Topics: Categories under which news articles are grouped.
	•	Articles: News pieces containing titles, content, associated topics, votes, and comments.
	•	Comments: User-submitted comments on news articles, allowing for discussions.
	•	User Profiles: Basic profiles tied to user comments and interactions.

API Routes

	1.	Articles Routes:
	•	Main Page: Lists all articles, sortable by votes to display the most popular news first.
	•	Filtered by Topic: Returns a list of news articles filtered by the selected topic.
	•	Individual Article: Displays the full content of a specific article, along with its associated comments and vote count.
	2.	Comments Routes:
	•	Comments are displayed with each article.
	•	Users can post new comments on any article.
	•	Users can delete their own comments if necessary.

User Stories

	1.	View Popular Articles:
	•	As a user, I want to see a list of news articles sorted by votes, so I can easily find popular and trending content.
	2.	Filter News by Topic:
	•	As a user, I want to filter articles by topics, so I can quickly find news that interests me.
	3.	Comment on News Articles:
	•	As a user, I want to post comments on an article, so I can engage in discussions about the news.
	4.	Upvote Articles and Comments:
	•	As a user, I want to upvote articles or comments, so I can show approval for content that I find valuable.
	5.	Delete My Comments:
	•	As a user, I want to delete my own comments, so I can control and manage what I have posted.

API Endpoints

Articles

	•	GET /articles: Fetches all articles, with options to sort by votes (popularity).
	•	GET /articles/:id: Fetches the details of a specific article, including its full content and comments.
	•	GET /topics/:topic/articles: Fetches a list of articles filtered by the selected topic (e.g., Politics, Sports, Technology).

Comments

	•	POST /articles/:id/comments: Allows a user to post a comment on a specific article.
	•	DELETE /comments/:id: Allows a user to delete their own comment.

Setup and Installation
1.	Clone the repository: git clone https://github.com/Clint700/nc-news-project.git. 
2.	Install dependencies: npm install
3.	Start the development server: npm start

Example Workflow

	•	Step 1: Users visit the main page, which lists all articles. They can choose to sort the articles by the number of votes.
	•	Step 2: Users can filter the list of articles by topic to only see the news that interests them.
	•	Step 3: By selecting an article, users can read the full news piece and view the comments made by other users.
	•	Step 4: Logged-in users can post new comments on the article and upvote both the article and existing comments.
	•	Step 5: If a user no longer wants their comment visible, they can delete it.

Future Enhancements

	•	Implement user authentication to allow multiple users to register and log in, enabling personalized content interaction.
	•	Add pagination for the article list, improving the handling of large data sets.
	•	Real-time updates for votes and comments using web sockets or a similar technology.
	•	Expand filtering options to include filters like “Author,” “Date,” and “Most Commented.”

License
In partnership with Northcoders