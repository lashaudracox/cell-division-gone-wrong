# Cell Division Gone Wrong
### A 4-Lesson NGSS-Aligned Instructional Module for Grades 9–10
**STEM Education & Outreach · Flipped Classroom Model · HS-LS1-4 & HS-LS3-2**

---

## 🌐 Live Site
**[lashaudracox.github.io/cell-division-gone-wrong](https://lashaudracox.github.io/cell-division-gone-wrong/)**

Start here → [`module.html`](https://lashaudracox.github.io/cell-division-gone-wrong/module.html) — Full module navigation hub

---

## 📋 Module Overview

This module asks high school biology students to think like researchers at a children's cancer hospital. Students work through the biology of the normal cell cycle, then analyze what happens when checkpoint proteins fail — culminating in a patient case study diagnosis and a summative Research Brief.

| | |
|---|---|
| **Grades** | 9–10 |
| **Subject** | Biology / Life Science |
| **NGSS Standards** | HS-LS1-4, HS-LS3-2 |
| **Model** | Flipped Classroom |
| **Bloom's Range** | Remember → Create (across 4 lessons) |
| **In-Class Time** | 4 × 50-minute sessions |

---

## 🗂 Module Status

| Lesson | Title | Bloom's Level | Status |
|--------|-------|---------------|--------|
| **1** | The Normal Cell Cycle | Remember → Understand | ✅ Complete |
| **2** | When Controls Break Down | Understand → Analyze | ✅ Complete ★ |
| **3** | The Genetics of Cancer | Analyze → Evaluate | 🔄 In Development |
| **4** | Fighting Back: Lab to Patient | Evaluate → Create | 🔄 In Development |

★ Lesson 2 is the sample lesson presented in the interview portfolio.

---

## 📁 File Inventory

### Navigation
| File | Description |
|------|-------------|
| `index.html` | Portfolio & interview showcase — Lesson 2 deep dive |
| `module.html` | Full module hub — all 4 lessons, resource links, timelines |

### Lesson 1 — The Normal Cell Cycle
| File | Type | Description |
|------|------|-------------|
| `Student_Lesson_TheNormalCellCycle.html` | HTML | 4-section digital lesson · phases, mitosis, checkpoints, proteins |
| `Student_Guided_Notes_Lesson1.html` | HTML | 5-section note-catcher · fill-in tables + synthesis questions |
| `Card_Sort_Lesson1.html` | HTML | 3-round interactive card sort · phases, PMAT, checkpoints |
| `Exit_Ticket_Lesson1.html` | HTML | 2 MC + 1 short answer · bridges to Lesson 2 |
| `Teacher_Facilitation_Guide_Lesson1.docx` | DOCX | Card sort protocol · triage table · Bloom's prompts |

### Lesson 2 — When Controls Break Down
| File | Type | Description |
|------|------|-------------|
| `Student_Lesson_WhenControlsBreakDown.html` | HTML | 5-section digital lesson · checkpoint mutations → cancer |
| `Student_Guided_Notes_Lesson2.html` | HTML | 7-section note-catcher · ELL starters · self-check |
| `Cell_Cycle_Checkpoint_Simulator.html` | HTML | 5-step interactive simulator · 4 mutation scenarios · completion gate |
| `Simulator_Reference_Guide.pdf` | PDF | Static companion to simulator · scenarios + synthesis questions |
| `Tumor_Board_Lesson2.html` | HTML | 4 specialist roles · consensus form · Maya ALL case study |
| `Scaffolded_Diagram_Lesson2.html` | HTML | Pre-annotated cell cycle · discreet differentiation support |
| `Extension_Activity_Lesson2.html` | HTML | TP53 mutation rate data analysis · early finishers |
| `Exit_Ticket_Lesson2.html` | HTML | 2 MC + 1 short answer · Google Sheet auto-capture |
| `Teacher_Facilitation_Guide_v3.docx` | DOCX | v3 · Tumor Board protocol · triage table · exemplars · signals |
| `Teacher_Classroom_Deck_Lesson2.pptx` | PPTX | 10-slide projector deck · synced to facilitation timeline |
| `Student_Digital_Lesson_PrintEdition.pdf` | PDF | Print edition of the digital lesson |

### Design Documents
| File | Type | Description |
|------|------|-------------|
| `Design_Rationale_Document_v2.docx` | DOCX | Theory behind every design decision · 18 citations |
| `The_Big-Picture_Design_Logic_v2.docx` | DOCX | Cross-document architecture · scaffolding decisions |

---

## 🧭 Navigation Architecture

All student-facing HTML files include:

1. **Module nav bar** — 38px sticky strip at top: `🔬 Cell Division > L1 | L2 | L3 | L4`
   Active lesson is highlighted. Every file links back to `module.html`.

2. **Read Aloud bar** — fixed at bottom. Web Speech API TTS with play/pause/stop/speed controls.
   Reads section-by-section with 500ms pauses and teal outline highlighting.

3. **Google Translate integration** — language selector in every student file.
   TTS reads in the selected language.

---

## 🔬 Design Principles

Every decision in this module is grounded in published instructional design research:

| Principle | Source | Application |
|-----------|--------|-------------|
| First Principles of Instruction | Merrill (2002) | Maya case anchors every document |
| Cognitive Load Theory | Sweller (2019) | Car brake/accelerator analogy as prior schema |
| Formative Assessment | Harris & Jones (2020) | Exit ticket triage table |
| Scaffolding / ZPD | Puntambekar (2022) | Scaffolded Diagram, ELL starters, faded support |
| ARCS Motivation Model | Keller (1987) | Maya relevance hook, research connection |
| 4C/ID | van Merriënboer (2009) | Simple-to-complex lesson sequencing |
| Case-Based Learning | Tawfik & Gatewood (2022) | Tumor Board specialist roles |
| Flow Theory | Vann & Tawfik (2020) | Simulator completion gate, extension leveling |

---

## 🛠 Tech Stack

- **HTML/CSS/JavaScript** — no frameworks, no build tools, no dependencies
- **Web Speech API** — browser-native TTS, works offline after initial load
- **Google Translate** — inline translation widget for ELL support
- **Google Apps Script** — optional exit ticket auto-capture to Google Sheets
- **GitHub Pages** — static hosting, zero configuration required

All files are flat in the root directory. No folders, no build step, no server.

---

## 👩🏾‍💻 Designer

**LaShaudra Cox** — Instructional Designer
📧 [coxl2@outlook.com](mailto:coxl2@outlook.com)
🌐 [lashaudracoxportfolio.com](https://lashaudracoxportfolio.com)
💼 [github.com/lashaudracox](https://github.com/lashaudracox)

---

*Cell Division Gone Wrong · STEM Education & Outreach · Grades 9–10*
