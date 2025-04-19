function selectLang() {
  const lang = document.getElementById("lang_opt").value;

  if (lang === "0") {
    alert("Please select a language.");
    return;
  }

  // Call loadSentences to populate the sentence dropdown
  loadSentences(lang);
}

// Hardcoded data from Eng-Sen.txt, Hin-Sen.txt, answer_opt_eng.txt, and answer_opt_hin.txt
const sentenceData = {
  1: {
    sentences: [
      {
        question: "John gave Mary a book.",
        answer:
          "John/NNP/B-NP gave/VBD/B-VP Mary/NNP/B-NP a/DT/B-NP book/NN/I-NP",
      },
      {
        question: "Close the door.",
        answer: "Close/RB/B-VP the/DT/B-NP door/NN/I-NP",
      },
      {
        question: "John cut an apple with a knife.",
        answer:
          "John/NNP/B-NP cut/VB/B-VP an/DT/B-NP apple/NN/I-NP with/IN/B-PP a/DT/B-NP knife/NN/I-NP",
      },
      {
        question: "We have a meeting on Monday at noon.",
        answer:
          "We/PRP/B-NP have/VBP/B-VP a/DT/B-NP meeting/NN/I-NP on/IN/B-PP Monday/NNP/B-NP at/IN/B-PP noon/NN/B-NP",
      },
      {
        question: "It is raining heavily in the south.",
        answer:
          "It/PRP/B-NP is/VBZ/B-VP raining/VBG/I-VP heavily/RB/B-ADVP in/IN/B-PP the/DT/B-NP south/RB/I-NP",
      },
      {
        question: "Mary baked a cake for the children in orphanage.",
        answer:
          "Mary/NNP/B-NP baked/VBD/B-VP a/DT/B-NP cake/NN/I-NP for/IN/B-PP the/DT/B-NP children/NNS/I-NP in/IN/B-PP orphanage/NN/B-NP",
      },
      {
        question: "The reputation of Ask Jeeves was very poor.",
        answer:
          "The/DT/B-NP reputation/NN/I-NP of/IN/B-PP Ask/VB/B-VP Jeeves/NNP/B-NP was/VBD/B-VP very/RB/B-ADJP poor/JJ/I-ADJP",
      },
      {
        question:
          "You can also expand your query to famous foods in California.",
        answer:
          "You/PRP/B-NP can/MD/B-VP also/RB/I-VP expand/VB/I-VP your/PRP$/B-NP query/NN/I-NP to/TO/B-PP famous/JJ/B-NP foods/NNS/I-NP in/IN/B-PP California/NNP/B-NP",
      },
      {
        question: "The steady improvements have earned the praise of analysts.",
        answer:
          "The/DT/B-NP steady/JJ/I-NP improvements/NNS/I-NP have/VBP/B-VP earned/VBN/I-VP the/DT/B-NP praise/NN/I-NP of/IN/B-PP analysts/NNS/B-NP",
      },
      {
        question: "Match.com will be more tightly integrated with Ask.",
        answer:
          "Match.com/NNP/B-NP will/MD/B-VP be/VB/I-VP more/RBR/I-VP tightly/RB/I-VP integrated/VBN/I-VP with/IN/B-PP Ask/VB/B-VP",
      },
    ],
    answerTokens: [
      "B-NP",
      "B-VP",
      "B-ADVP",
      "B-ADJP",
      "B-PP",
      "I-NP",
      "I-VP",
      "I-ADVP",
      "I-ADJP",
      "I-PP",
    ],
  },
  2: {
    sentences: [
      {
        question: "राम सीता के लिए फूलों की माला बनाता है।",
        answer:
          "राम/NN/B-NP सीता/NP/B-NP के/PSP/I-NP लिए/PSP/I-NP फूलों/NP/B-NP की/PSP/I-NP माला/NP/B-NP बनाता/VM/B-VGF है/VAUX/I-VGF",
      },
      {
        question: "सभी बच्चे विद्यालय में पढ़ते है|",
        answer:
          "सभी/QF/B-NP बच्चे/NN/I-NP विद्यालय/NN/B-NP में/PSP/I-NP पढ़ते/VM/B-VGF है/VAUX/I-VGF",
      },
      {
        question: "मैंने उनसे एक सहज प्रश्न पूछा था।",
        answer:
          "मैंने/PRP/B-NP उनसे/PRP/B-NP एक/QC/B-NP सहज/JJ/I-NP प्रश्न/NN/I-NP पूछा/VM/B-VGF था/VAUX/I-VGF",
      },
      {
        question: "भागता हुआ हिरण गिर गया।",
        answer:
          "भागता/VM/B-VGNF हुआ/VAUX/I-VGNF हिरण/NN/B-NP गिर/VM/B-VGF गया/VAUX/I-VGF",
      },
      {
        question: "लक्ष्मण राम के साथ वनवास गया।",
        answer:
          "लक्ष्मण/NNP/B-NP राम/NNP/B-NP के/PSP/I-NP साथ/NST/I-NP वनवास/NN/B-NP गया/VM/B-VGF",
      },
      {
        question: "इस शुभावसर पर राम ने गरीबों को दान दिया।",
        answer:
          "इस/DEM/B-NP शुभावसर/NN/I-NP पर/PSP/I-NP राम/NNP/B-NP ने/PSP/I-NP गरीबों/NN/B-NP को/PSP/I-NP दान/NN/B-NP दिया/VM/B-VGF",
      },
      {
        question:
          "ट्रेन में होने वाले हर अपराध में इस गाँव का कोई शामिल मिल जाएगा।",
        answer:
          "ट्रेन/NN/B-NP में/PSP/I-NP होने/VM/B-VGNN वाले/PSP/I-VGNN हर/QF/B-NP अपराध/NN/I-NP में/PSP/I-NP इस/DEM/B-NP गाँव/NN/I-NP का/PSP/I-NP कोई/PRP/B-NP शामिल/NN/I-NP मिल/VM/B-VP जाएगा/VAUX/I-VP",
      },
      {
        question: "तुम्हारे सपने है बड़े से।",
        answer:
          "तुम्हारे/PRP/B-NP सपने/NN/B-NP है/VM/B-VGF बड़े/JJ/B-JJP से/RP/I-JJP",
      },
    ],
    answerTokens: [
      "B-NP",
      "B-VGF",
      "B-VGNF",
      "B-VGNN",
      "B-RBP",
      "B-JJP",
      "I-NP",
      "I-VGF",
      "I-VGNF",
      "I-VGNN",
      "I-RBP",
      "I-JJP",
    ],
  },
};

// Function to load sentences dynamically based on the selected language
function loadSentences(lang) {
  const sentenceDropdown = document.getElementById("sentence_opt");
  const displayDiv = document.getElementById("display");

  // Clear previous content
  sentenceDropdown.innerHTML =
    '<option value="-1" selected>---Select a sentence---</option>';
  displayDiv.innerHTML = "";

  // Fetch sentences based on the selected language
  const sentences = sentenceData[lang]?.sentences || [];
  sentences.forEach((sentence, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = sentence.question; // Display the question part
    sentenceDropdown.appendChild(option);
  });

  // Show the sentence dropdown
  document.getElementById("sentenceForm").style.display = "block";
}

// Function to populate the table dynamically based on the selected sentence
function populateTable(lang, sentenceIndex) {
  const displayDiv = document.getElementById("display");
  const sentenceInfo = sentenceData[lang]?.sentences[sentenceIndex];
  const answerTokens = sentenceData[lang]?.answerTokens || [];

  if (!sentenceInfo) {
    displayDiv.innerHTML =
      "<p>No data available for the selected sentence.</p>";
    return;
  }

  const answerChunks = sentenceInfo.answer.split(" ");
  const sentenceInfoInput = `<input type="hidden" name="sentence_info" id="sentence_info" value="${sentenceInfo.answer}" />`;
  const tableHeader = `
      <th>Lexicon</th>
      <th>POS</th>
      <th>Chunk</th>
      <th id="cor_head"></th>
      <th id="ans_head"></th>
    `;
  let tableRows = "";

  answerChunks.forEach((chunk, index) => {
    const partAnswer = chunk.split("/");
    const options = answerTokens
      .map((token) => `<option>${token}</option>`)
      .join("");

    tableRows += `
        <tr>
          <td>${partAnswer[0]}</td>
          <td>${partAnswer[1]}</td>
          <td>
            <select name="t" id="token${index}">
              ${options}
            </select>
          </td>
          <td id="correction${index}"></td>
          <td id="correct${index}"></td>
        </tr>
      `;
  });

  const tableHTML = `
      ${sentenceInfoInput}
      <table cellspacing="-2" cellpadding="4" border="1" style="text-align:center;">
        ${tableHeader}
        ${tableRows}
      </table>
    `;

  displayDiv.innerHTML = tableHTML;
}

function selectSentence() {
  const lang = document.getElementById("lang_opt").value;
  const sentenceDropdown = document.getElementById("sentence_opt");
  const sentenceIndex = sentenceDropdown.value;

  if (sentenceIndex === "-1") {
    alert("Please select a sentence.");
    return;
  }

  // Populate the table for the selected sentence
  populateTable(lang, sentenceIndex);
}

function checkAnswer() {
  console.log("checkAnswer function called");

  // Get the sentence information
  const sentenceInfo = document.getElementById("sentence_info").value;
  const answerChunks = sentenceInfo.split(" ");
  let flag = 0;

  // Iterate through each chunk and compare user answers with the correct answers
  answerChunks.forEach((chunk, index) => {
    const userAnswer = document.getElementById(`token${index}`).value; // User's selected answer
    const correctAnswer = chunk.split("/")[2]; // Correct chunk from the sentence info

    // Check if the user's answer matches the correct answer
    if (userAnswer !== correctAnswer) {
      flag = 1;
      document.getElementById(`correction${index}`).innerHTML =
        '<img src="wrong.png" style="height:25px; width:25px" alt="Wrong" />';
    } else {
      document.getElementById(`correction${index}`).innerHTML =
        '<img src="right.png" style="height:25px; width:25px" alt="Right" />';
    }
  });

  // If there are incorrect answers, show the "Get Answer" button
  if (flag === 1) {
    document.getElementById("see_soln").innerHTML =
      '<br/> <form action="javascript:correctTable()"> <input type="submit" value="Get Answer" /> </form><br/>';
  }
}

// Function to display the correct answers in the table
function correctTable() {
  console.log("correctTable function called");

  // Get the sentence information
  const sentenceInfo = document.getElementById("sentence_info").value;
  const answerChunks = sentenceInfo.split(" ");

  // Iterate through each chunk and display the correct answers
  answerChunks.forEach((chunk, index) => {
    const correctAnswer = chunk.split("/")[2];
    document.getElementById(`correct${index}`).innerHTML = correctAnswer;
  });

  // Update the "see_soln" div to show the "Hide Answer" button
  document.getElementById("see_soln").innerHTML =
    '<br/> <form action="javascript:clearTable()"> <input type="submit" value="Hide Answer" /> </form>';
}

// Function to clear the correct answers from the table
function clearTable() {
  console.log("clearTable function called");

  // Get the sentence information
  const sentenceInfo = document.getElementById("sentence_info").value;
  const answerChunks = sentenceInfo.split(" ");

  // Iterate through each chunk and clear the correct answers
  answerChunks.forEach((chunk, index) => {
    document.getElementById(`correct${index}`).innerHTML = "";
  });

  // Update the "see_soln" div to show the "Get Answer" button
  document.getElementById("see_soln").innerHTML =
    '<br/> <form action="javascript:correctTable()"> <input type="submit" value="Get Answer" /> </form><br/>';
}

// Expose the functions to the global scope
window.checkAnswer = checkAnswer;
window.correctTable = correctTable;
window.clearTable = clearTable;
