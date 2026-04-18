# ❌⭕ Tic Tac Toe

A simple browser-based Tic Tac Toe game for two players built with pure HTML, CSS, and JavaScript.

---

## 🎮 Description

This is a classic Tic Tac Toe game where:
- Two players take turns (❌ and ⭕)
- Moves are made by clicking the grid
- The first player to form a line of three symbols wins
- The game is blocked after a win

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid Layout, pseudo-elements)
- Vanilla JavaScript (no libraries or frameworks)

---

## 📁 Project Structure
/project
│
├── index.html # game markup
├── main.css # game styling
├── main.js # game logic


---

## 🚀 How to Run

1. Clone or download the project:
```bash
git clone <repo-url>
Open the project folder
Open index.html in your browser
Play the game 🎮
🧠 Game Logic
The board consists of 9 buttons
Each click places either ❌ or ⭕
Turns alternate using the switcher variable
Player states are stored in arrays:
circle[]
cross[]
Win detection is handled by the CheckSum() function
When a player wins:
the board is disabled
a “Congratulations!” message is displayed
🏆 Winning Conditions

A player wins by completing one of the following lines:

Horizontal
Vertical
Diagonal

Created as a learning project to practice JavaScript, DOM manipulation, and basic game logic.
