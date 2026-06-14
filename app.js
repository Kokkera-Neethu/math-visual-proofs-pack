const formulas = [
  {
    title: "Area of Square",
    category: "Geometry",
    formula: "A = a²",
    explanation: "Area of square is side multiplied by side.",
    proof: [
      "A square has equal sides.",
      "Area = side × side.",
      "So A = a²."
    ],
    visual: "square"
  },
  {
    title: "Area of Rectangle",
    category: "Geometry",
    formula: "A = l × b",
    explanation: "Area of rectangle is length multiplied by breadth.",
    proof: [
      "Rectangle has length and breadth.",
      "Divide it into rows and columns.",
      "Total area = length × breadth."
    ],
    visual: "rectangle"
  },
  {
    title: "Area of Circle",
    category: "Geometry",
    formula: "A = πr²",
    explanation: "Area of circle is pi times radius square.",
    proof: [
      "Divide circle into equal sectors.",
      "Rearrange sectors like a rectangle.",
      "Height becomes r.",
      "Base becomes πr.",
      "Area = πr × r = πr²."
    ],
    visual: "circleArea"
  },
  {
    title: "Circumference of Circle",
    category: "Geometry",
    formula: "C = 2πr",
    explanation: "Circumference is the boundary length of a circle.",
    proof: [
      "Diameter = 2r.",
      "Circumference = π × diameter.",
      "So C = 2πr."
    ],
    visual: "circleCircumference"
  },
  {
    title: "Pythagorean Theorem",
    category: "Geometry",
    formula: "a² + b² = c²",
    explanation: "In a right triangle, square of hypotenuse equals sum of squares of other two sides.",
    proof: [
      "Draw a right triangle.",
      "Build squares on all three sides.",
      "Two smaller square areas equal bigger square area.",
      "So a² + b² = c²."
    ],
    visual: "pythagoras"
  },
  {
    title: "Area of Triangle",
    category: "Geometry",
    formula: "A = 1/2 × b × h",
    explanation: "Triangle area is half of parallelogram area.",
    proof: [
      "Take two same triangles.",
      "Join them to form a parallelogram.",
      "Parallelogram area = base × height.",
      "One triangle area = half of that."
    ],
    visual: "triangle"
  },
  {
    title: "Area of Parallelogram",
    category: "Geometry",
    formula: "A = b × h",
    explanation: "Area of parallelogram is base multiplied by height.",
    proof: [
      "Cut side triangle from parallelogram.",
      "Move it to the other side.",
      "It becomes a rectangle.",
      "Area = base × height."
    ],
    visual: "parallelogram"
  },
  {
    title: "Area of Trapezium",
    category: "Geometry",
    formula: "A = 1/2(a+b)h",
    explanation: "Area of trapezium is half the sum of parallel sides multiplied by height.",
    proof: [
      "Take two same trapeziums.",
      "Join them to form a parallelogram.",
      "Base becomes a+b.",
      "Area of one trapezium = 1/2(a+b)h."
    ],
    visual: "trapezium"
  },
  {
    title: "Binomial Square Formula",
    category: "Algebra",
    formula: "(a+b)² = a² + 2ab + b²",
    explanation: "Square of side a+b can be divided into four areas.",
    proof: [
      "Draw a square of side a+b.",
      "Divide it into a², ab, ab, b².",
      "Add all areas.",
      "So (a+b)² = a² + 2ab + b²."
    ],
    visual: "binomial"
  },
  {
    title: "Difference of Squares",
    category: "Algebra",
    formula: "a² - b² = (a-b)(a+b)",
    explanation: "Difference of squares can be rearranged into a rectangle.",
    proof: [
      "Draw big square a².",
      "Remove small square b².",
      "Remaining area can be rearranged.",
      "It forms rectangle (a-b)(a+b)."
    ],
    visual: "differenceSquares"
  },
  {
    title: "Quadratic Formula",
    category: "Algebra",
    formula: "x = [-b ± √(b²-4ac)] / 2a",
    explanation: "Quadratic formula solves ax² + bx + c = 0.",
    proof: [
      "Start with ax² + bx + c = 0.",
      "Divide by a.",
      "Complete the square.",
      "Solve for x."
    ],
    visual: "quadratic"
  },
  {
    title: "Trigonometric Identity",
    category: "Trigonometry",
    formula: "sin²θ + cos²θ = 1",
    explanation: "This identity comes from unit circle and Pythagoras.",
    proof: [
      "In unit circle radius = 1.",
      "x = cosθ and y = sinθ.",
      "Using x² + y² = 1.",
      "So sin²θ + cos²θ = 1."
    ],
    visual: "trig"
  },
  {
    title: "Tan Ratio",
    category: "Trigonometry",
    formula: "tanθ = sinθ / cosθ",
    explanation: "Tan is ratio of sine and cosine.",
    proof: [
      "sinθ = opposite / hypotenuse.",
      "cosθ = adjacent / hypotenuse.",
      "sinθ/cosθ = opposite/adjacent.",
      "So tanθ = sinθ/cosθ."
    ],
    visual: "tan"
  },
  {
    title: "Sum of First N Numbers",
    category: "Series",
    formula: "1 + 2 + ... + n = n(n+1)/2",
    explanation: "Pair first and last numbers to get equal sums.",
    proof: [
      "Write numbers from 1 to n.",
      "Write same numbers in reverse.",
      "Each pair gives n+1.",
      "There are n pairs.",
      "Sum = n(n+1)/2."
    ],
    visual: "sumN"
  },
  {
    title: "Sum of Odd Numbers",
    category: "Series",
    formula: "1 + 3 + 5 + ... + (2n-1) = n²",
    explanation: "First n odd numbers form n by n square.",
    proof: [
      "Start with 1 block.",
      "Add 3 blocks.",
      "Add 5 blocks.",
      "Each step forms bigger square.",
      "After n steps area is n²."
    ],
    visual: "oddSum"
  },
  {
    title: "Arithmetic Progression Sum",
    category: "Series",
    formula: "Sₙ = n/2[2a+(n-1)d]",
    explanation: "Sum of AP depends on first term, difference and number of terms.",
    proof: [
      "First term is a.",
      "Common difference is d.",
      "Last term is a+(n-1)d.",
      "Sum = n/2(first + last)."
    ],
    visual: "ap"
  },
  {
    title: "Geometric Progression Sum",
    category: "Series",
    formula: "Sₙ = a(rⁿ-1)/(r-1)",
    explanation: "Sum of GP comes by multiplying and subtracting series.",
    proof: [
      "Write S = a + ar + ar² + ...",
      "Multiply by r.",
      "Subtract both equations.",
      "Solve for S."
    ],
    visual: "gp"
  },
  {
    title: "Volume of Cube",
    category: "Mensuration",
    formula: "V = a³",
    explanation: "Volume of cube is side × side × side.",
    proof: [
      "Cube has equal length, breadth and height.",
      "Volume = a × a × a.",
      "So V = a³."
    ],
    visual: "cube"
  },
  {
    title: "Volume of Cuboid",
    category: "Mensuration",
    formula: "V = l × b × h",
    explanation: "Cuboid volume is length × breadth × height.",
    proof: [
      "Base area = l × b.",
      "Stack it to height h.",
      "Volume = l × b × h."
    ],
    visual: "cuboid"
  },
  {
    title: "Volume of Cylinder",
    category: "Mensuration",
    formula: "V = πr²h",
    explanation: "Cylinder volume is circular base area multiplied by height.",
    proof: [
      "Base is circle.",
      "Circle area = πr².",
      "Height is h.",
      "Volume = πr²h."
    ],
    visual: "cylinder"
  },
  {
    title: "Volume of Cone",
    category: "Mensuration",
    formula: "V = 1/3πr²h",
    explanation: "Cone volume is one third of cylinder volume.",
    proof: [
      "Take cylinder with same radius and height.",
      "Three cones fill one cylinder.",
      "So cone volume = 1/3πr²h."
    ],
    visual: "cone"
  },
  {
    title: "Volume of Sphere",
    category: "Mensuration",
    formula: "V = 4/3πr³",
    explanation: "Sphere volume depends on radius cube.",
    proof: [
      "Sphere can be sliced into many circles.",
      "Adding all slices gives volume.",
      "Final formula is 4/3πr³."
    ],
    visual: "sphere"
  }
];

const formulaList = document.getElementById("formulaList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const formulaCategory = document.getElementById("formulaCategory");
const formulaTitle = document.getElementById("formulaTitle");
const formulaText = document.getElementById("formulaText");
const formulaExplanation = document.getElementById("formulaExplanation");
const proofSteps = document.getElementById("proofSteps");
const visualNotes = document.getElementById("visualNotes");
const canvas = document.getElementById("visualCanvas");
const ctx = canvas.getContext("2d");
const sizeSlider = document.getElementById("sizeSlider");
const nSlider = document.getElementById("nSlider");

let selectedIndex = 0;
let playing = true;
let time = 0;

function renderCards() {
  formulaList.innerHTML = "";

  const searchValue = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  formulas.forEach((item, index) => {
    const matchSearch =
      item.title.toLowerCase().includes(searchValue) ||
      item.formula.toLowerCase().includes(searchValue) ||
      item.category.toLowerCase().includes(searchValue);

    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    if (matchSearch && matchCategory) {
      const card = document.createElement("div");
      card.className = "formula-card";

      if (index === selectedIndex) {
        card.classList.add("active");
      }

      card.innerHTML = `
        <strong>${item.title}</strong>
        <small>${item.category}</small><br>
        <small>${item.formula}</small>
      `;

      card.onclick = () => selectFormula(index);
      formulaList.appendChild(card);
    }
  });
}

function selectFormula(index) {
  selectedIndex = index;
  time = 0;
  loadFormula();
  renderCards();
}

function loadFormula() {
  const item = formulas[selectedIndex];

  formulaCategory.textContent = item.category;
  formulaTitle.textContent = item.title;
  formulaText.textContent = item.formula;
  formulaExplanation.textContent = item.explanation;

  proofSteps.innerHTML = "";

  item.proof.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    proofSteps.appendChild(li);
  });

  renderVisualNotes(item);
}
function renderVisualNotes(item) {
  const notesMap = {
    square: [
      "Square has equal sides.",
      "Each side is represented by a.",
      "Area = side × side.",
      "Final result: A = a²"
    ],
    rectangle: [
      "Rectangle has length and breadth.",
      "Length is horizontal.",
      "Breadth is vertical.",
      "Final result: A = l × b"
    ],
    circleArea: [
      "Circle is divided into sectors.",
      "Sectors are rearranged like a rectangle.",
      "Base becomes πr.",
      "Height becomes r.",
      "Final result: A = πr²"
    ],
    circleCircumference: [
      "Circle boundary is unwrapped into a line.",
      "Diameter = 2r.",
      "Circumference = π × diameter.",
      "Final result: C = 2πr"
    ],
    pythagoras: [
      "Right triangle is shown.",
      "Squares are built on all three sides.",
      "Two smaller square areas equal the bigger square area.",
      "Final result: a² + b² = c²"
    ],
    triangle: [
      "Two same triangles form a parallelogram.",
      "Parallelogram area = base × height.",
      "One triangle is half of that.",
      "Final result: A = 1/2 × b × h"
    ],
    parallelogram: [
      "Cut one side triangle.",
      "Move it to the other side.",
      "Shape becomes rectangle.",
      "Final result: A = b × h"
    ],
    trapezium: [
      "Two same trapeziums form a parallelogram.",
      "Parallel sides combine as a+b.",
      "One trapezium is half.",
      "Final result: A = 1/2(a+b)h"
    ],
    binomial: [
      "Square side is a+b.",
      "Square is divided into a², ab, ab and b².",
      "Add all parts.",
      "Final result: (a+b)² = a² + 2ab + b²"
    ],
    differenceSquares: [
      "Big square represents a².",
      "Small square represents b².",
      "Remove b² from a².",
      "Final result: a² - b² = (a-b)(a+b)"
    ],
    quadratic: [
      "Parabola is shown clearly.",
      "Roots are where graph cuts x-axis.",
      "Quadratic formula finds the roots.",
      "Final result: x = [-b ± √(b²-4ac)] / 2a"
    ],
    trig: [
      "Unit circle is shown.",
      "Horizontal side is cosθ.",
      "Vertical side is sinθ.",
      "Final result: sin²θ + cos²θ = 1"
    ],
    tan: [
      "Right triangle is shown.",
      "Opposite and adjacent sides are marked.",
      "tanθ = opposite / adjacent.",
      "Final result: tanθ = sinθ / cosθ"
    ],
    sumN: [
      "Blocks represent 1, 2, 3 ... n.",
      "Numbers are arranged visually.",
      "Sum follows a pattern.",
      "Final result: n(n+1)/2"
    ],
    oddSum: [
      "Odd numbers form square layers.",
      "1, 3, 5... build a square.",
      "After n steps, square area is n².",
      "Final result: Sum = n²"
    ],
    ap: [
      "Bars increase by common difference.",
      "This represents arithmetic progression.",
      "Sum depends on first term and last term.",
      "Final result: Sₙ = n/2[2a+(n-1)d]"
    ],
    gp: [
      "Each block changes by ratio r.",
      "This represents geometric progression.",
      "Terms are multiplied by r.",
      "Final result: Sₙ = a(rⁿ-1)/(r-1)"
    ],
    cube: [
      "Cube has equal sides.",
      "Length = breadth = height = a.",
      "Volume = a × a × a.",
      "Final result: V = a³"
    ],
    cuboid: [
      "Cuboid has length, breadth and height.",
      "Base area = l × b.",
      "Volume = base area × height.",
      "Final result: V = l × b × h"
    ],
    cylinder: [
      "Base is a circle.",
      "Circle area = πr².",
      "Volume = base area × height.",
      "Final result: V = πr²h"
    ],
    cone: [
      "Cone is related to cylinder.",
      "Three cones fill one cylinder.",
      "Cone volume is one-third cylinder.",
      "Final result: V = 1/3πr²h"
    ],
    sphere: [
      "Sphere is a round 3D solid.",
      "Volume depends on radius cube.",
      "Formula uses radius r.",
      "Final result: V = 4/3πr³"
    ]
  };

  const notes = notesMap[item.visual] || ["Diagram notes available."];

  visualNotes.innerHTML = `
    <ul>
      ${notes.map(note => `<li>${note}</li>`).join("")}
    </ul>
  `;
}

function playAnimation() {
  playing = true;
}

function pauseAnimation() {
  playing = false;
}

function resetAnimation() {
  time = 0;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function text(txt, x, y, size = 16, color = "#111827") {
  ctx.fillStyle = color;
  ctx.font = `${size}px Arial`;
  ctx.fillText(txt, x, y);
}

function line(x1, y1, x2, y2, color = "#2563eb", width = 2) {
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function rect(x, y, w, h, color = "#dbeafe", stroke = "#2563eb") {
  ctx.fillStyle = color;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 2;
  ctx.fillRect(x, y, w, h);
  ctx.strokeRect(x, y, w, h);
}

function circle(x, y, r, color = "#dbeafe", stroke = "#2563eb") {
  ctx.fillStyle = color;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}
function drawFormulaInfo() {
  // Keep canvas clean. Title and formula are already shown above.
}

function progress() {
  return (Math.sin(time) + 1) / 2;
}

function drawSquare() {
  const s = Number(sizeSlider.value);
  const x = 110;
  const y = 120;

  rect(x, y, s, s);

  for (let i = 1; i < 6; i++) {
    line(x + i * s / 6, y, x + i * s / 6, y + s, "#2563eb", 1);
    line(x, y + i * s / 6, x + s, y + i * s / 6, "#2563eb", 1);
  }

  text("side = a", x + s + 30, y + 40);
  text("Area = side × side", 470, 160, 20);
  text("Area = a × a", 470, 200, 20);
  text("Area = a²", 470, 240, 24, "#2563eb");
}

function drawRectangle() {
  const l = Number(sizeSlider.value) + 100;
  const b = Number(sizeSlider.value) - 20;
  const x = 80;
  const y = 140;

  rect(x, y, l, b);

  for (let i = 1; i < 8; i++) {
    line(x + i * l / 8, y, x + i * l / 8, y + b, "#2563eb", 1);
  }

  for (let j = 1; j < 4; j++) {
    line(x, y + j * b / 4, x + l, y + j * b / 4, "#2563eb", 1);
  }

  text("length = l", x + 90, y + b + 30);
  text("breadth = b", x + l + 25, y + 70);
  text("Area = l × b", 470, 200, 24, "#2563eb");
}

function drawCircleArea() {
  const r = Number(sizeSlider.value) / 1.6;
  const cx = 190;
  const cy = 240;
  const p = progress();

  circle(cx, cy, r);

  for (let i = 0; i < 18; i++) {
    const angle = (Math.PI * 2 / 18) * i;
    line(cx, cy, cx + r * Math.cos(angle), cy + r * Math.sin(angle), "#2563eb", 1);
  }

  rect(470, 170, 240 * p, r, "#bfdbfe");

  text("Circle sectors rearranged", 470, 145);
  text("base = πr", 530, 170 + r + 25);
  text("height = r", 470 + 240 * p + 10, 170 + r / 2);
  text("Area = πr²", 500, 340, 26, "#2563eb");
}

function drawCircleCircumference() {
  const r = Number(sizeSlider.value) / 1.6;
  const cx = 190;
  const cy = 230;
  const p = progress();

  circle(cx, cy, r, "white");

  line(cx - r, cy, cx + r, cy, "#111827", 2);
  text("diameter = 2r", cx - 45, cy + 30);

  line(450, 230, 450 + 270 * p, 230, "#2563eb", 8);
  text("Boundary unwraps into line", 450, 190);
  text("C = 2πr", 500, 310, 26, "#2563eb");
}

function drawPythagoras() {
  const x = 100;
  const y = 340;
  const a = 130;
  const b = 160;
  const c = Math.sqrt(a * a + b * b);
  const p = progress();

  ctx.fillStyle = "#dbeafe";
  ctx.strokeStyle = "#111827";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + a, y);
  ctx.lineTo(x + a, y - b);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  rect(x, y, a, a * p, "#bfdbfe");
  rect(x + a, y - b, b * p, b, "#93c5fd");
  rect(480, 140, c * 0.75 * p, c * 0.75, "#60a5fa");

  text("a²", x + 45, y + 60);
  text("b²", x + a + 50, y - b + 70);
  text("c²", 520, 220);
  text("a² + b² = c²", 480, 350, 24, "#2563eb");
}

function drawTriangle() {
  const x = 100;
  const y = 340;
  const base = 240;
  const h = 160;
  const p = progress();

  ctx.fillStyle = "#93c5fd";
  ctx.strokeStyle = "#111827";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + base, y);
  ctx.lineTo(x + base, y - h);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.save();
  ctx.translate(260 * p, 0);
  ctx.fillStyle = "#bfdbfe";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - h);
  ctx.lineTo(x + base, y - h);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  text("Two triangles form parallelogram", 470, 160);
  text("A = 1/2 × b × h", 470, 230, 24, "#2563eb");
}

function drawParallelogram() {
  const x = 100;
  const y = 320;
  const p = progress();

  ctx.fillStyle = "#dbeafe";
  ctx.strokeStyle = "#2563eb";
  ctx.beginPath();
  ctx.moveTo(x + 70, y - 160);
  ctx.lineTo(x + 310, y - 160);
  ctx.lineTo(x + 240, y);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.save();
  ctx.translate(250 * p, 0);
  ctx.fillStyle = "#93c5fd";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 70, y - 160);
  ctx.lineTo(x + 70, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  text("Cut and move side triangle", 470, 160);
  text("A = b × h", 470, 230, 24, "#2563eb");
}

function drawTrapezium() {
  const x = 100;
  const y = 320;
  const p = progress();

  ctx.fillStyle = "#dbeafe";
  ctx.strokeStyle = "#2563eb";
  ctx.beginPath();
  ctx.moveTo(x + 70, y - 160);
  ctx.lineTo(x + 240, y - 160);
  ctx.lineTo(x + 310, y);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.save();
  ctx.translate(260 * p, 0);
  ctx.fillStyle = "#bfdbfe";
  ctx.beginPath();
  ctx.moveTo(x + 70, y - 160);
  ctx.lineTo(x + 240, y - 160);
  ctx.lineTo(x + 310, y);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  text("Two trapeziums form parallelogram", 470, 160);
  text("A = 1/2(a+b)h", 470, 230, 24, "#2563eb");
}

function drawBinomial() {
  const x = 100;
  const y = 110;
  const a = Number(sizeSlider.value);
  const b = 80;

  rect(x, y, a, a, "#93c5fd");
  rect(x + a, y, b, a, "#bfdbfe");
  rect(x, y + a, a, b, "#bfdbfe");
  rect(x + a, y + a, b, b, "#dbeafe");

  text("a²", x + a / 2 - 10, y + a / 2, 18);
  text("ab", x + a + b / 2 - 10, y + a / 2, 18);
  text("ab", x + a / 2 - 10, y + a + b / 2, 18);
  text("b²", x + a + b / 2 - 10, y + a + b / 2, 18);

  text("(a+b)² = a² + 2ab + b²", 450, 220, 22, "#2563eb");
}

function drawDifferenceSquares() {
  const x = 100;
  const y = 110;
  const a = 220;
  const b = 90;
  const p = progress();

  rect(x, y, a, a, "#dbeafe");
  rect(x + a - b, y + a - b, b, b, "white");

  rect(470, 180, (a - b) * p, a + b, "#bfdbfe");

  text("Remove b² from a²", 100, 370);
  text("Rearranged as rectangle", 470, 150);
  text("a² - b² = (a-b)(a+b)", 470, 380, 22, "#2563eb");
}

 function drawQuadratic() {
  line(80, 250, 420, 250, "#9ca3af", 1);
  line(250, 80, 250, 380, "#9ca3af", 1);

  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 3;
  ctx.beginPath();

  for (let x = -160; x <= 160; x += 5) {
    const rx = x / 50;
    const ry = rx * rx - 2;
    const px = 250 + x;
    const py = 250 - ry * 45;

    if (x === -160) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }

  ctx.stroke();

  text("x-axis", 385, 270, 14, "#64748b");
  text("y-axis", 260, 95, 14, "#64748b");
}
function drawTrig() {
  const cx = 230;
  const cy = 240;
  const r = 120;
  const angle = time;
  const x = cx + r * Math.cos(angle);
  const y = cy - r * Math.sin(angle);

  circle(cx, cy, r, "white");

  line(cx, cy, x, y, "#111827", 2);
  line(cx, cy, x, cy, "#2563eb", 2);
  line(x, cy, x, y, "#ef4444", 2);

  circle(x, y, 6, "#2563eb");

  text("cosθ", (cx + x) / 2, cy + 25);
  text("sinθ", x + 10, (cy + y) / 2);
  text("sin²θ + cos²θ = 1", 470, 230, 24, "#2563eb");
}

function drawTan() {
  const x = 120;
  const y = 340;
  const adj = 240;
  const opp = 150;

  ctx.fillStyle = "#dbeafe";
  ctx.strokeStyle = "#111827";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + adj, y);
  ctx.lineTo(x + adj, y - opp);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  text("opposite", x + adj + 15, y - 70);
  text("adjacent", x + 90, y + 25);
  text("tanθ = opposite / adjacent", 470, 180);
  text("tanθ = sinθ / cosθ", 470, 240, 24, "#2563eb");
}

function drawSumN() {
  const n = Number(nSlider.value);
  const p = progress();
  const startX = 80;
  const bottomY = 360;
  const box = 24;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i * p; j++) {
      rect(startX + i * 35, bottomY - j * box, box, box, "#93c5fd", "white");
    }

    text(i, startX + i * 35 + 8, bottomY + 25, 14);
  }

  text("n = " + n, 470, 150);
  text("Sum = " + (n * (n + 1) / 2), 470, 190);
  text("1+2+...+n = n(n+1)/2", 470, 250, 22, "#2563eb");
}

function drawOddSum() {
  const n = Number(nSlider.value);
  const visible = Math.max(1, Math.floor(n * progress()));
  const x = 130;
  const y = 110;
  const cell = 26;

  for (let i = 0; i < visible; i++) {
    for (let j = 0; j < visible; j++) {
      rect(x + i * cell, y + j * cell, cell, cell, "#93c5fd", "white");
    }
  }

  text("Odd numbers form square", 470, 160);
  text("n = " + visible, 470, 200);
  text("Sum = n²", 470, 250, 24, "#2563eb");
}

function drawAP() {
  const n = Number(nSlider.value);
  const x = 80;
  const y = 360;
  const p = progress();

  for (let i = 0; i < n; i++) {
    const h = 40 + i * 18;
    rect(x + i * 45, y - h * p, 35, h * p, "#93c5fd", "white");
  }

  text("Bars increase by common difference d", 470, 170);
  text("Sₙ = n/2[2a+(n-1)d]", 470, 240, 22, "#2563eb");
}

function drawGP() {
  const x = 80;
  const y = 340;
  const p = progress();

  for (let i = 0; i < 6; i++) {
    const size = 150 / Math.pow(1.45, i);
    rect(x + i * 85, y - size * p, size * p, size * p, "#93c5fd");
  }

  text("Each term is multiplied by ratio r", 470, 170);
  text("Sₙ = a(rⁿ-1)/(r-1)", 470, 240, 22, "#2563eb");
}

function draw3DBox(x, y, w, h, d) {
  rect(x, y, w, h, "#dbeafe");

  ctx.fillStyle = "#bfdbfe";
  ctx.strokeStyle = "#2563eb";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + d, y - d);
  ctx.lineTo(x + w + d, y - d);
  ctx.lineTo(x + w, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#93c5fd";
  ctx.beginPath();
  ctx.moveTo(x + w, y);
  ctx.lineTo(x + w + d, y - d);
  ctx.lineTo(x + w + d, y + h - d);
  ctx.lineTo(x + w, y + h);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawCube() {
  draw3DBox(140, 160, 150, 150, 60);
  text("Cube has equal sides", 470, 170);
  text("V = a³", 470, 240, 26, "#2563eb");
}

function drawCuboid() {
  draw3DBox(100, 180, 260, 130, 70);
  text("Length × breadth × height", 470, 170);
  text("V = l × b × h", 470, 240, 26, "#2563eb");
}

function drawCylinder() {
  const x = 220;
  const y = 150;
  const w = 180;
  const h = 210;

  ctx.strokeStyle = "#2563eb";
  ctx.fillStyle = "#dbeafe";
  ctx.beginPath();
  ctx.ellipse(x, y, w / 2, 25, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  line(x - w / 2, y, x - w / 2, y + h);
  line(x + w / 2, y, x + w / 2, y + h);

  ctx.beginPath();
  ctx.ellipse(x, y + h, w / 2, 25, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  text("Base area = πr²", 470, 170);
  text("Volume = base × height", 470, 210);
  text("V = πr²h", 470, 270, 26, "#2563eb");
}

function drawCone() {
  const x = 230;
  const topY = 120;
  const baseY = 350;

  ctx.fillStyle = "#dbeafe";
  ctx.strokeStyle = "#2563eb";
  ctx.beginPath();
  ctx.moveTo(x, topY);
  ctx.lineTo(x - 110, baseY);
  ctx.lineTo(x + 110, baseY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(x, baseY, 110, 28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  text("Cone is 1/3 of cylinder", 470, 170);
  text("V = 1/3πr²h", 470, 240, 26, "#2563eb");
}

function drawSphere() {
  const x = 230;
  const y = 240;
  const r = 120;

  circle(x, y, r);

  ctx.strokeStyle = "#2563eb";
  ctx.beginPath();
  ctx.ellipse(x, y, r, 30, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(x, y, 35, r, 0, 0, Math.PI * 2);
  ctx.stroke();

  text("Sphere volume depends on r³", 470, 170);
  text("V = 4/3πr³", 470, 240, 26, "#2563eb");
}

function animate() {
  clearCanvas();

  if (playing) {
    time += 0.035;
  }

  drawFormulaInfo();

  const visual = formulas[selectedIndex].visual;

  if (visual === "square") drawSquare();
  else if (visual === "rectangle") drawRectangle();
  else if (visual === "circleArea") drawCircleArea();
  else if (visual === "circleCircumference") drawCircleCircumference();
  else if (visual === "pythagoras") drawPythagoras();
  else if (visual === "triangle") drawTriangle();
  else if (visual === "parallelogram") drawParallelogram();
  else if (visual === "trapezium") drawTrapezium();
  else if (visual === "binomial") drawBinomial();
  else if (visual === "differenceSquares") drawDifferenceSquares();
  else if (visual === "quadratic") drawQuadratic();
  else if (visual === "trig") drawTrig();
  else if (visual === "tan") drawTan();
  else if (visual === "sumN") drawSumN();
  else if (visual === "oddSum") drawOddSum();
  else if (visual === "ap") drawAP();
  else if (visual === "gp") drawGP();
  else if (visual === "cube") drawCube();
  else if (visual === "cuboid") drawCuboid();
  else if (visual === "cylinder") drawCylinder();
  else if (visual === "cone") drawCone();
  else if (visual === "sphere") drawSphere();

  requestAnimationFrame(animate);
}

searchInput.addEventListener("input", renderCards);
categoryFilter.addEventListener("change", renderCards);

loadFormula();
renderCards();
animate();
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Math Visual Proofs Pack</title>

  <link rel="stylesheet" href="style.css" />
</head>

<body>

<header>
  <h1>Math Visual Proofs Pack</h1>
  <p>Interactive Animated Visualizations for Math Formulas and Proofs</p>
</header>

<section class="top-controls">
  <input type="text" id="searchInput" placeholder="Search formula..." />

  <select id="categoryFilter">
    <option value="All">All Categories</option>
    <option value="Geometry">Geometry</option>
    <option value="Algebra">Algebra</option>
    <option value="Trigonometry">Trigonometry</option>
    <option value="Series">Series</option>
    <option value="Mensuration">Mensuration</option>
  </select>
</section>

<main>
  <aside>
    <h2>Formulas</h2>
    <div id="formulaList"></div>
  </aside>

  <section class="content">
    <div class="box">
      <p class="category" id="formulaCategory">Geometry</p>
      <h2 id="formulaTitle">Area of Square</h2>
      <h1 id="formulaText">A = a²</h1>
      <p id="formulaExplanation"></p>
    </div>

    <div class="box buttons">
      <button onclick="playAnimation()">Play</button>
      <button onclick="pauseAnimation()">Pause</button>
      <button onclick="resetAnimation()">Reset</button>

      <label>Size</label>
      <input type="range" id="sizeSlider" min="60" max="240" value="150" />

      <label>n</label>
      <input type="range" id="nSlider" min="3" max="12" value="6" />
    </div>

    <div class="box visual-layout">
  <div class="canvas-panel">
    <canvas id="visualCanvas" width="760" height="460"></canvas>
  </div>

  <div class="visual-notes-panel">
    <h3>Diagram Notes</h3>
    <div id="visualNotes"></div>
  </div>
</div>

    <div class="box">
      <h3>Proof Steps</h3>
      <ol id="proofSteps"></ol>
    </div>
  </section>
</main>

<script src="app.js"></script>
</body>
</html>
# Math Visual Proofs Pack

This is an interactive animated math visualization project built using HTML, CSS and JavaScript.

## Features

- Category-wise math formulas
- Interactive animated visualizations
- Play, Pause and Reset controls
- Size slider and n-value slider
- Search formula option
- Category filter
- Formula explanation
- Step-by-step proof

## Categories

- Geometry
- Algebra
- Trigonometry
- Series
- Mensuration

## Technologies Used

- HTML
- CSS
- JavaScript
- Canvas API

## How to Run

Open `index.html` in browser or run using Live Server in VS Code.

## Future Scope

More formulas and advanced visual proof animations can be added formula by formula.
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f3f4f6;
  color: #111827;
}

header {
  background: linear-gradient(135deg, #111827, #2563eb);
  color: white;
  text-align: center;
  padding: 28px;
}

header h1 {
  margin: 0;
  font-size: 34px;
}

header p {
  margin: 8px 0 0;
  color: #dbeafe;
}

.top-controls {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: white;
  border-bottom: 1px solid #ddd;
}

#searchInput {
  flex: 1;
}

#searchInput,
#categoryFilter {
  padding: 12px;
  font-size: 15px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}

main {
  display: flex;
  min-height: calc(100vh - 140px);
}

aside {
  width: 320px;
  background: white;
  padding: 18px;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.formula-card {
  padding: 13px;
  margin-bottom: 10px;
  background: #eef2ff;
  border-left: 5px solid #2563eb;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.formula-card:hover {
  background: #dbeafe;
  transform: translateX(4px);
}

.formula-card.active {
  background: #bfdbfe;
}

.formula-card strong {
  display: block;
  font-size: 15px;
}

.formula-card small {
  color: #475569;
}

.content {
  flex: 1;
  padding: 22px;
  overflow-y: auto;
}

.box {
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 18px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}

.category {
  display: inline-block;
  padding: 7px 13px;
  border-radius: 18px;
  background: #dbeafe;
  color: #1d4ed8;
  font-weight: bold;
}

#formulaText {
  color: #2563eb;
  font-size: 32px;
}

.buttons button {
  padding: 10px 16px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  color: white;
  background: #2563eb;
  cursor: pointer;
}

.buttons button:hover {
  background: #1d4ed8;
}

label {
  margin-left: 16px;
  font-weight: bold;
}

input[type="range"] {
  vertical-align: middle;
}

canvas {
  width: 100%;
  max-width: 850px;
  height: 460px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: white;
}

ol li {
  margin-bottom: 10px;
  line-height: 1.5;
}

@media (max-width: 900px) {
  main {
    flex-direction: column;
  }

  aside {
    width: 100%;
    max-height: 300px;
  }

  .top-controls {
    flex-direction: column;
  }
}
.visual-layout {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.canvas-panel {
  flex: 2;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
}

.canvas-panel canvas {
  display: block;
  width: 100%;
  max-width: 100%;
  height: 460px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
}

.visual-notes-panel {
  flex: 1;
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 18px;
  min-height: 460px;
}

.visual-notes-panel h3 {
  margin-top: 0;
  margin-bottom: 14px;
  color: #1d4ed8;
}

#visualNotes {
  line-height: 1.7;
  color: #334155;
  font-size: 15px;
}

#visualNotes ul {
  padding-left: 20px;
  margin: 0;
}

#visualNotes li {
  margin-bottom: 10px;
}

@media (max-width: 1000px) {
  .visual-layout {
    flex-direction: column;
  }

  .visual-notes-panel {
    min-height: auto;
    width: 100%;
  }
}
