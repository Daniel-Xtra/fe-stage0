# 🪪 Profile Card — HNG Stage 0 Submission

A clean, responsive, and accessible **Profile Card** built using **semantic HTML**, **modern CSS**, and **vanilla JavaScript**.  
This project fulfills all the requirements for the **HNG Stage 0 Task** and demonstrates a strong grasp of core frontend principles such as responsiveness, accessibility, and semantic markup.  
Font Awesome icons are used to enhance visual clarity and provide a professional touch.

---

## 🌐 Live Demo

🔗 **[View Live Project](https://your-live-demo-link.vercel.app)**

---

## ✨ Features

- ✅ **Semantic HTML** — Uses proper HTML5 elements (`<article>`, `<header>`, `<figure>`, `<section>`, etc.)
- ✅ **Accessibility** — Fully keyboard-accessible with ARIA labels, focus indicators, and alt text
- ✅ **Responsive Design** — Mobile-first layout that adapts across screen sizes
- ✅ **Font Awesome Integration** — Beautiful and scalable social icons
- ✅ **Dynamic Time Display** — Shows the current time in milliseconds (updated live)
- ✅ **Fully Testable** — Every visible element includes the required `data-testid` attributes
- ✅ **Graceful Fallbacks** — Handles broken avatar links and unexpected content
- ✅ **Zero Dependencies** — Built entirely with plain HTML, CSS, and JavaScript

---

## 🧱 Core Elements & Test IDs

| Element                 | `data-testid`                | Description                                 |
| ----------------------- | ---------------------------- | ------------------------------------------- |
| Profile Card Root       | `test-profile-card`          | Wrapper element for the profile card        |
| User Name               | `test-user-name`             | Displays the user's name                    |
| Biography               | `test-user-bio`              | Short description or introduction           |
| Current Time            | `test-user-time`             | Shows the current time in milliseconds      |
| Avatar                  | `test-user-avatar`           | User’s profile image (with alt text)        |
| Social Links Container  | `test-user-social-links`     | Wrapper for all social links                |
| Individual Social Links | `test-user-social-{network}` | Each link (e.g. `test-user-social-twitter`) |
| Hobbies                 | `test-user-hobbies`          | List of hobbies/interests                   |
| Dislikes                | `test-user-dislikes`         | List of dislikes or things to avoid         |

---

## 🎨 UI & Design

- Elegant, modern card layout with subtle shadows and rounded edges
- Font Awesome icons for consistency and professional feel
- Smooth hover transitions for interactive elements
- High-contrast color palette for readability
- Uses Flexbox for layout and alignment
- Built with accessibility in mind — readable, navigable, and screen-reader friendly

---

## ♿ Accessibility Features

- Keyboard navigation for all links and interactive items
- Visible focus states and hover feedback
- Descriptive ARIA labels for assistive technologies
- Proper heading hierarchy and semantic tags
- High contrast and reduced motion support
- Accessible alt text for images

---

## ⚙️ Local Setup

To run the project locally:

### 1️⃣ Clone the Repository

git clone https://github.com/yourusername/profile-card.git
cd profile-card
