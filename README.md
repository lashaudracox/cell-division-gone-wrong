# Cell Division Gone Wrong
### Understanding Cancer at the Cellular Level

**A flipped classroom instructional module for Grades 9–10**
Designed for a STEMM Education & Outreach program at a children's cancer research hospital · LaShaudra Cox, Instructional Designer

---

## About This Module

This module teaches high school biology students how mutations in cell cycle checkpoint genes lead to uncontrolled cell division — and why that is the biological basis of cancer. Every lesson connects to real biomedical research, including real patient narratives, TP53 mutation biology, publicly accessible genomic data portals, and CAR-T cell immunotherapy.

The module uses a **flipped classroom model**: students engage with core content independently through online resources before class, and face-to-face time is reserved for analysis, case study discussion, and problem solving.

> **Lesson focus:** This repository contains the complete set of materials for **Lesson 2: When Controls Break Down** — the sample lesson demonstrated in the accompanying presentation.

---

## What's Included

### Student-Facing Materials

| File | Type | Description |
|------|------|-------------|
| `Student_Lesson_Overview.html` | Advance Organizer | One-page orientation students read **before** opening the digital lesson. Includes the learning objective, what to do online vs. in-class, vocabulary preview, Bloom's arc, assessment overview, and a readiness checklist. Addresses the pre-training effect (Mayer, 2009). |
| `Student_Lesson_WhenControlsBreakDown.html` | Digital Lesson | 5-section online module students complete before class. Covers the cell cycle, checkpoints, mutation mechanisms, cancer biology, and closes with a 3-question exit ticket. |
| `Cell_Cycle_Checkpoint_Simulator.html` | Interactive Tool | Browser-based simulator with 4 mutation scenarios (healthy cell, TP53 mutation, RAS oncogene, combined). Students step through the cell cycle phase by phase with embedded Think questions. |
| `Student_Guided_Notes_Lesson2.html` | Interactive Notes | Fully typeable 7-section note-catcher spanning the complete lesson arc. Auto-saves to browser. Print button produces a clean PDF with all typed answers preserved. |
| `Exit_Ticket_Lesson2.html` | Formative Assessment | Standalone 3-question exit ticket (2 MC + 1 short answer). Includes a teacher-facing triage guide below the cut line with 5 data patterns and specific in-class responses for each. |

### Teacher Materials

| File | Type | Description |
|------|------|-------------|
| `Teacher_Facilitation_Guide_v2.docx` | Facilitation Guide | Complete facilitation system for the 50-minute in-class session. Includes exit ticket triage table, 50-min timeline with 6 phases, Bloom's-organized discussion prompts with 3-level exemplar responses (Strong/Partial/Needs Support), struggle signal panels at every step, 4 misconception entries, 5 rapid detection techniques, and a post-class sorting protocol. |
| `Simulator_Reference_Guide.pdf` | Print Reference | Static companion to the interactive simulator. Summarizes all 4 scenarios with status panels, outcomes, Think questions, and note-catcher rows for offline or print use. |
| `Design_Rationale_Document.docx` | Leave-Behind | 6-page document explaining the theoretical and empirical foundation behind every design decision — from the objective's Bloom's level to the structure of the simulator scenarios. |

### Print/Download Versions

| File | Description |
|------|-------------|
| `Student_Digital_Lesson.pdf` | Print version of the 5-section digital lesson |
| `Student_Guided_Notes.pdf` | Print version of the guided notes |
| `Student_Digital_Lesson.docx` | Word version of the digital lesson |
| `Student_Guided_Notes.docx` | Word version of the guided notes |
| `Simulator_Reference_Guide.docx` | Word version of the simulator reference guide |

---

## How to Open the Interactive Files

All HTML files run directly in any modern browser — no installation, no login, no LMS required.

**Live links (GitHub Pages):**
- [Module Landing Page](https://lashaudracox.github.io/cell-division-gone-wrong/)
- [Student Lesson Overview](https://lashaudracox.github.io/cell-division-gone-wrong/Student_Lesson_Overview.html)
- [Student Digital Lesson](https://lashaudracox.github.io/cell-division-gone-wrong/Student_Lesson_WhenControlsBreakDown.html)
- [Checkpoint Simulator](https://lashaudracox.github.io/cell-division-gone-wrong/Cell_Cycle_Checkpoint_Simulator.html)
- [Interactive Guided Notes](https://lashaudracox.github.io/cell-division-gone-wrong/Student_Guided_Notes_Lesson2.html)
- [Exit Ticket](https://lashaudracox.github.io/cell-division-gone-wrong/Exit_Ticket_Lesson2.html)

To run locally: download any `.html` file and open it in Chrome, Firefox, Safari, or Edge.

---

## The Lesson: When Controls Break Down (Lesson 2 of 4)

| # | Lesson | Online (Independent) | In-Class Application | Bloom's Level |
|---|--------|---------------------|---------------------|---------------|
| 1 | The Normal Cell Cycle | Narrated module + mitosis simulation | Collaborative card sort | Remember → Understand |
| **2** ★ | **When Controls Break Down** | **Digital lesson + simulator + exit ticket** | **"Meet Maya" ALL case study + debrief** | **Understand → Analyze** |
| 3 | The Genetics of Cancer | Oncogenes vs. tumor suppressors | Modeling activity — broken DNA repair | Analyze → Evaluate |
| 4 | Fighting Back: Lab to Patient | Researcher video + genomic data portal | Treatment strategy design challenge | Evaluate → Create |

★ Materials in this repository correspond to Lesson 2.

---

## Standards Alignment

| Standard | Description |
|----------|-------------|
| **HS-LS1-4** | Use a model to illustrate the role of cellular division (mitosis) and differentiation in producing and maintaining complex organisms. |
| **HS-LS3-2** | Make and defend a claim based on evidence that inheritable genetic variations may result from new genetic combinations through meiosis, mutations, or errors in mitosis. |

---

## Learning Objective

> Students will **analyze** how mutations in cell cycle checkpoint genes lead to uncontrolled cell division and **explain** why this is the biological basis of cancer.

Verb selection draws from Anderson & Krathwohl's (2001) revised Bloom's Taxonomy at the **analysis level**, setting the cognitive floor for all assessment items in the module.

---

## Instructional Design Framework

| Design Decision | Theory | Citation |
|----------------|--------|---------|
| Problem-centered around a patient case (Maya) | First Principles of Instruction | Merrill, 2002 |
| Lesson Overview as advance organizer (pre-training effect) | Cognitive Theory of Multimedia Learning | Mayer, 2009 |
| Analogies as cognitive scaffolds (brake/accelerator) | Cognitive Load Theory | Sweller, 2019 |
| Flipped model with exit ticket triage | Formative Assessment Theory | Harris & Jones |
| Guided notes offload organizational demand without removing conceptual demand | Scaffolding for PBL | Belland, Kim & Hannafin, 2013 |
| Simulator as step-through application (not passive animation) | First Principles — Application | Merrill, 2002 |
| 4 scenarios in simple-to-complex sequence | 4C/ID Model | van Merriënboer et al., 2009 |
| ARCS model woven through the digital lesson | Motivational Design | Keller, 1987 |
| 3-level exemplar responses in facilitation guide | Formative Assessment | Harris & Jones |

---

## Simulator Scenarios

| Scenario | Mutation Type | Outcome |
|----------|--------------|---------|
| ✅ Healthy Cell | None | Normal division — two identical daughter cells |
| 🔴 TP53 Mutation | Loss-of-function (tumor suppressor) | G1 checkpoint bypassed → apoptosis via G2 backup |
| 🟡 RAS Oncogene | Gain-of-function (proto-oncogene) | Accelerated division → elevated cancer risk |
| ⚠️ TP53 + RAS Combined | Both mutations | Uncontrolled division → tumor formation |

---

## Technical Notes

- All files are **pure HTML/CSS/JavaScript** — no frameworks, no build process, no dependencies
- Tested in Chrome, Firefox, Safari, and Edge
- Accessible on Chromebook, iPad, and desktop
- Embeddable in Google Classroom, Canvas, Schoology, or any LMS via direct link or iframe
- Interactive files (Guided Notes, Exit Ticket, Lesson Overview) auto-save to `localStorage`
- Print buttons on all interactive files produce clean, formatted PDFs via browser print dialog

---

## About the Designer

**LaShaudra Cox** is an instructional designer and early-stage doctoral candidate in Instructional Design & Technology at the University of Memphis. This module was created as a standards-aligned instructional design challenge for a STEMM Education & Outreach program at a children's cancer research hospital.

Portfolio: [lashaudracoxportfolio.com](https://lashaudracoxportfolio.com)

---

## References

- Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). *A taxonomy for learning, teaching, and assessing.* Longman.
- Belland, B. R., Kim, C., & Hannafin, M. J. (2013). A framework for designing scaffolds that improve motivation and cognition. *Educational Psychologist, 48*(4), 243–270.
- Keller, J. M. (1987). Development and use of the ARCS model of instructional design. *Journal of Instructional Development, 10*(3), 2–10.
- Mayer, R. E. (2009). *Multimedia learning* (2nd ed.). Cambridge University Press.
- Merrill, M. D. (2002). First principles of instruction. *Educational Technology Research and Development, 50*(3), 43–59.
- Sweller, J. (2019). Cognitive load theory and educational technology. *Educational Technology Research and Development, 68*(1), 1–16.
- van Merriënboer, J. J. G., Sluijsmans, D., & Jochems, W. (2009). Toward a synthesis of cognitive load theory, four-component instructional design, and self-directed learning. *Educational Psychology Review, 21*(1), 55–66.
