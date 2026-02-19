# CORE Admin Dashboard

A modern **Team Management & Timesheet Dashboard** built using **React + Material UI**, designed with a premium Figma-inspired UI and smooth UX interactions.

This project demonstrates advanced frontend architecture including reusable components, animated layouts, sortable tables, and production-ready UI structure.

---

## Live Features

### Navigation & Layout
- Collapsible Premium Sidebar
- Nested Menu Navigation
- SVG Connector Lines (Figma-style curve)
- Responsive Layout (Desktop + Mobile)
- Header with dynamic breadcrumbs

---

### People Module
- Card Layout with avatars
- Status indicators
- Pagination (Reusable component)
- Blur loading state

---

###  Timesheet Module

#### Stats Overview
- Total
- Regular
- Overtime
- OT2
- Holiday
- Anomalies

Equal width cards with Figma-matching alignment.

---

#### Advanced Table (Material UI)
- Column-wise sorting
- Active column underline animation
- Auto-rotating sort icons ↑ ↓
- Ripple hover effect
- Row fade animation
- Search filtering
- CSV Download export

Columns:
- Employee
- Total
- Regular
- Overtime
- OT2
- Holiday

---

### Smart Search
- Live filtering
- Case insensitive
- Pagination auto reset

---

### Export System
Download filtered data as CSV using dynamic file generation.

---

### UI & Animations
- BlurLoader Component
- Smooth Sidebar Transitions
- Custom Scrollbar Styling
- Micro Hover Animations
- Premium Gradient Sidebar

---

## Tech Stack

 Tech  Usage 

 React.js     Frontend Framework 
 Material UI  Table & UI System 
 React Router DOM  Routing 
 CSS Modules  Scoped Styling 
 SVG          Custom Icons & Connectors 

---

## Project Structure

src/
├── assets/
│ └── icons/
├── components/
│ ├── ui/
│ │ └── BlurLoader.jsx
│ └── people/
│ └── Pagination.jsx
├── layout/
│ ├── Sidebar.jsx
│ └── Header.jsx
├── pages/
│ ├── People/
│ └── Timesheet/
├── data/
│ └── timesheetData.js


---

## Installation

```bash
git clone <repo>
cd core-dashboard
npm install
npm run dev


## Responsive Behaviour
Device	Behaviour
Desktop	Full Sidebar
Tablet	Collapsible Sidebar
Mobile	Slide Drawer Sidebar

## UX Highlights

Figma accurate spacing

Underline animation on sort

Smooth table interactions

Premium depth shadows

Minimalist clean layout

## Upcoming Features

Reimbursement Module

API Integration

Role-based Access

Dark Mode

Advanced Filters

## Author

Prathmesh Kadam
Full Stack Developer