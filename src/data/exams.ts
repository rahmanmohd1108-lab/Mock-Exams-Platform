// Government Exam Data - Multiple Years and Exam Types

export interface Question {
  id: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export interface Section {
  id: string;
  name: string;
  questions: Question[];
  marksPerQuestion: number;
}

export interface ExamConfig {
  id: string;
  name: string;
  fullName: string;
  description: string;
  category: string;
  year: number;
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  negativeMarking: number;
  passingPercentage: number;
  sections: Section[];
}

// ==========================================
// QUESTION BANKS - REUSABLE QUESTIONS
// ==========================================

// SSC CGL Reasoning Questions (Expanded)
const reasoningQuestions: Question[] = [
  { id: 1, text: "Select the option that is related to the third term in the same way as the second term is related to the first term. DOG : PUPPY :: CAT : ?", options: { A: "Kitten", B: "Puppy", C: "Cub", D: "Calf" }, correctAnswer: "A" },
  { id: 2, text: "Which number will replace the question mark in the series? 2, 6, 12, 20, 30, ?", options: { A: "40", B: "42", C: "44", D: "38" }, correctAnswer: "B" },
  { id: 3, text: "If 'FATHER' is coded as 'GBUIFS', then how will 'SISTER' be coded?", options: { A: "TJTUFS", B: "TJTSFS", C: "TJTSES", D: "TITUFU" }, correctAnswer: "A" },
  { id: 4, text: "Select the Venn diagram that best represents the relationship between: Animals, Mammals, Dogs", options: { A: "All circles separate", B: "Animals contains Mammals contains Dogs", C: "All circles overlap", D: "Dogs separate, others overlap" }, correctAnswer: "B" },
  { id: 5, text: "In a row of students, Ram is 7th from the left and Shyam is 12th from the right. If they interchange their positions, Ram becomes 22nd from the left. How many students are there in the row?", options: { A: "33", B: "32", C: "34", D: "31" }, correctAnswer: "A" },
  { id: 6, text: "Select the word-pair in which the two words are related in the same way as are the two words in the given pair. Doctor : Hospital :: ?", options: { A: "Teacher : School", B: "Player : Ground", C: "Chef : Kitchen", D: "All of the above" }, correctAnswer: "D" },
  { id: 7, text: "Which letter will replace the question mark? B, D, G, K, ?", options: { A: "N", B: "P", C: "O", D: "M" }, correctAnswer: "B" },
  { id: 8, text: "Find the odd one out from the given alternatives: 28, 45, 72, 81", options: { A: "28", B: "45", C: "72", D: "81" }, correctAnswer: "A" },
  { id: 9, text: "If A = 1, B = 2, C = 3, and so on, then what is the value of 'CAT'?", options: { A: "24", B: "25", C: "26", D: "27" }, correctAnswer: "A" },
  { id: 10, text: "Select the figure that will come next in the following figure series. (Pattern: Circle, Square, Triangle, Circle, Square, ?)", options: { A: "Triangle", B: "Circle", C: "Square", D: "Rectangle" }, correctAnswer: "A" },
  { id: 11, text: "Pointing to a photograph, a man said, 'She is the daughter of my father's only son.' How is the man related to the girl in the photograph?", options: { A: "Father", B: "Uncle", C: "Brother", D: "Grandfather" }, correctAnswer: "A" },
  { id: 12, text: "A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?", options: { A: "Uncle", B: "Nephew", C: "Cousin", D: "Grandfather" }, correctAnswer: "A" },
  { id: 13, text: "If + means ×, - means ÷, × means +, ÷ means -, then what is the value of 8 + 6 - 2 × 5 ÷ 8?", options: { A: "23", B: "25", C: "27", D: "29" }, correctAnswer: "C" },
  { id: 14, text: "Select the option in which the numbers share the same relationship as that shared by the given number pair. 7 : 49", options: { A: "3 : 6", B: "5 : 25", C: "4 : 8", D: "6 : 10" }, correctAnswer: "B" },
  { id: 15, text: "Arrange the following words in a meaningful logical order: 1. Flower 2. Seed 3. Plant 4. Fruit 5. Tree", options: { A: "2, 3, 5, 1, 4", B: "2, 3, 1, 5, 4", C: "2, 3, 5, 4, 1", D: "2, 1, 3, 5, 4" }, correctAnswer: "A" },
  { id: 16, text: "In a certain code language, 'LAPTOP' is written as 'OZKGLK'. How will 'MOBILE' be written in that language?", options: { A: "NLRJKM", B: "NLRYOV", C: "NLRYKM", D: "NLRYLM" }, correctAnswer: "B" },
  { id: 17, text: "Select the number that can replace the question mark. 4 : 16 :: 7 : ?", options: { A: "49", B: "28", C: "21", D: "35" }, correctAnswer: "A" },
  { id: 18, text: "Find the missing number in the series: 1, 4, 9, 16, 25, ?", options: { A: "35", B: "36", C: "49", D: "64" }, correctAnswer: "B" },
  { id: 19, text: "Which of the following words cannot be formed using the letters of the word 'INTELLIGENCE'?", options: { A: "TILL", B: "TELL", C: "GENTLE", D: "CANCEL" }, correctAnswer: "D" },
  { id: 20, text: "Six persons A, B, C, D, E and F are sitting in a circle facing the center. A is between E and D. C is between B and F. E is to the left of D. Who is between D and B?", options: { A: "E", B: "F", C: "C", D: "A" }, correctAnswer: "B" },
  { id: 21, text: "Complete the analogy: Book : Pages :: Tree : ?", options: { A: "Leaves", B: "Branches", C: "Roots", D: "Trunk" }, correctAnswer: "A" },
  { id: 22, text: "If 'ROSE' is coded as 6821, 'CHAIR' is coded as 73456, then 'SEARCH' is coded as?", options: { A: "246173", B: "214673", C: "214763", D: "216473" }, correctAnswer: "B" },
  { id: 23, text: "Find the odd one: Car, Bus, Train, Bicycle", options: { A: "Car", B: "Bus", C: "Train", D: "Bicycle" }, correctAnswer: "D" },
  { id: 24, text: "If CLOUD is written as DMPVE, how is RAIN written?", options: { A: "SBJO", B: "QZHM", C: "SBJM", D: "QZHM" }, correctAnswer: "A" },
  { id: 25, text: "Select the correct mirror image of 'PUQLE' when mirror is placed on right side.", options: { A: "PQULB", B: "ELQUP", C: "PQULE", D: "ELQEB" }, correctAnswer: "B" },
];

// SSC General Awareness Questions (Expanded)
const generalAwarenessQuestions: Question[] = [
  { id: 26, text: "Which Article of the Indian Constitution deals with the Right to Equality?", options: { A: "Article 14-18", B: "Article 19-22", C: "Article 23-24", D: "Article 25-28" }, correctAnswer: "A" },
  { id: 27, text: "Who was the first President of India?", options: { A: "Jawaharlal Nehru", B: "Dr. Rajendra Prasad", C: "Dr. S. Radhakrishnan", D: "Mahatma Gandhi" }, correctAnswer: "B" },
  { id: 28, text: "The Battle of Plassey was fought in which year?", options: { A: "1757", B: "1764", C: "1857", D: "1947" }, correctAnswer: "A" },
  { id: 29, text: "Which planet is known as the 'Red Planet'?", options: { A: "Venus", B: "Mars", C: "Jupiter", D: "Saturn" }, correctAnswer: "B" },
  { id: 30, text: "The headquarters of the Reserve Bank of India is located in:", options: { A: "New Delhi", B: "Mumbai", C: "Kolkata", D: "Chennai" }, correctAnswer: "B" },
  { id: 31, text: "Which vitamin is synthesized by the human body when exposed to sunlight?", options: { A: "Vitamin A", B: "Vitamin B", C: "Vitamin C", D: "Vitamin D" }, correctAnswer: "D" },
  { id: 32, text: "The largest river island in the world, Majuli, is located in which Indian state?", options: { A: "West Bengal", B: "Assam", C: "Bihar", D: "Uttar Pradesh" }, correctAnswer: "B" },
  { id: 33, text: "Who among the following is known as the 'Father of Indian Constitution'?", options: { A: "Mahatma Gandhi", B: "B.R. Ambedkar", C: "Jawaharlal Nehru", D: "Sardar Patel" }, correctAnswer: "B" },
  { id: 34, text: "The 'Swachh Bharat Mission' was launched in which year?", options: { A: "2012", B: "2013", C: "2014", D: "2015" }, correctAnswer: "C" },
  { id: 35, text: "Which of the following is not a fundamental right under the Indian Constitution?", options: { A: "Right to Equality", B: "Right to Freedom", C: "Right to Property", D: "Right to Education" }, correctAnswer: "C" },
  { id: 36, text: "The chemical formula of water is:", options: { A: "HO", B: "H2O", C: "H2O2", D: "OH2" }, correctAnswer: "B" },
  { id: 37, text: "Who invented the telephone?", options: { A: "Thomas Edison", B: "Alexander Graham Bell", C: "Guglielmo Marconi", D: "Isaac Newton" }, correctAnswer: "B" },
  { id: 38, text: "The longest river in India is:", options: { A: "Yamuna", B: "Godavari", C: "Ganga", D: "Brahmaputra" }, correctAnswer: "C" },
  { id: 39, text: "Which country won the FIFA World Cup 2022?", options: { A: "France", B: "Brazil", C: "Argentina", D: "Germany" }, correctAnswer: "C" },
  { id: 40, text: "The 'Quit India Movement' was launched in:", options: { A: "1940", B: "1942", C: "1944", D: "1946" }, correctAnswer: "B" },
  { id: 41, text: "Which among the following is the largest gland in the human body?", options: { A: "Pituitary", B: "Thyroid", C: "Liver", D: "Pancreas" }, correctAnswer: "C" },
  { id: 42, text: "The national bird of India is:", options: { A: "Sparrow", B: "Peacock", C: "Parrot", D: "Eagle" }, correctAnswer: "B" },
  { id: 43, text: "Who was the first woman Prime Minister of India?", options: { A: "Indira Gandhi", B: "Sarojini Naidu", C: "Pratibha Patil", D: "Sushma Swaraj" }, correctAnswer: "A" },
  { id: 44, text: "The capital of Australia is:", options: { A: "Sydney", B: "Melbourne", C: "Canberra", D: "Perth" }, correctAnswer: "C" },
  { id: 45, text: "Which of the following is a renewable source of energy?", options: { A: "Coal", B: "Petroleum", C: "Solar Energy", D: "Natural Gas" }, correctAnswer: "C" },
  { id: 46, text: "The Indian National Congress was founded in which year?", options: { A: "1885", B: "1887", C: "1890", D: "1892" }, correctAnswer: "A" },
  { id: 47, text: "Which planet is known as the 'Morning Star'?", options: { A: "Mars", B: "Venus", C: "Jupiter", D: "Mercury" }, correctAnswer: "B" },
  { id: 48, text: "The currency of Japan is:", options: { A: "Yuan", B: "Won", C: "Yen", D: "Ringgit" }, correctAnswer: "C" },
  { id: 49, text: "Who wrote 'Discovery of India'?", options: { A: "Mahatma Gandhi", B: "Jawaharlal Nehru", C: "Rabindranath Tagore", D: "B.R. Ambedkar" }, correctAnswer: "B" },
  { id: 50, text: "The 'Dandi March' was associated with which movement?", options: { A: "Non-Cooperation Movement", B: "Civil Disobedience Movement", C: "Quit India Movement", D: "Swadeshi Movement" }, correctAnswer: "B" },
];

// Quantitative Aptitude Questions (Expanded)
const quantitativeQuestions: Question[] = [
  { id: 51, text: "What is the value of 25% of 400?", options: { A: "75", B: "100", C: "125", D: "150" }, correctAnswer: "B" },
  { id: 52, text: "If a + b = 7 and ab = 12, find a² + b²", options: { A: "25", B: "26", C: "27", D: "28" }, correctAnswer: "A" },
  { id: 53, text: "A train covers a distance of 360 km in 4 hours. What is its speed in m/s?", options: { A: "20 m/s", B: "25 m/s", C: "30 m/s", D: "35 m/s" }, correctAnswer: "B" },
  { id: 54, text: "Find the simple interest on Rs. 5000 at 10% per annum for 2 years.", options: { A: "Rs. 500", B: "Rs. 800", C: "Rs. 1000", D: "Rs. 1200" }, correctAnswer: "C" },
  { id: 55, text: "The ratio of two numbers is 3:5. If their sum is 64, find the larger number.", options: { A: "24", B: "36", C: "40", D: "45" }, correctAnswer: "C" },
  { id: 56, text: "A can do a work in 15 days and B can do the same work in 20 days. In how many days can they complete the work together?", options: { A: "8 4/7 days", B: "9 3/7 days", C: "10 days", D: "12 days" }, correctAnswer: "A" },
  { id: 57, text: "The area of a circle is 154 cm². Find its radius. (Take π = 22/7)", options: { A: "5 cm", B: "7 cm", C: "9 cm", D: "11 cm" }, correctAnswer: "B" },
  { id: 58, text: "If the selling price of an article is Rs. 240 and profit is 20%, find the cost price.", options: { A: "Rs. 180", B: "Rs. 192", C: "Rs. 200", D: "Rs. 210" }, correctAnswer: "C" },
  { id: 59, text: "Simplify: (2³ + 3²) ÷ 5", options: { A: "5", B: "7", C: "9", D: "11" }, correctAnswer: "B" },
  { id: 60, text: "Find the average of first 10 natural numbers.", options: { A: "4.5", B: "5", C: "5.5", D: "6" }, correctAnswer: "C" },
  { id: 61, text: "A rectangle has a length of 12 cm and breadth of 8 cm. What is its perimeter?", options: { A: "20 cm", B: "40 cm", C: "36 cm", D: "96 cm" }, correctAnswer: "B" },
  { id: 62, text: "If x : y = 2 : 3, then the value of (3x + 2y) : (2x + 3y) is:", options: { A: "11 : 12", B: "12 : 13", C: "10 : 13", D: "13 : 12" }, correctAnswer: "B" },
  { id: 63, text: "The compound interest on Rs. 10000 at 10% per annum for 2 years is:", options: { A: "Rs. 2000", B: "Rs. 2100", C: "Rs. 2200", D: "Rs. 2500" }, correctAnswer: "B" },
  { id: 64, text: "Find the value of √0.0064 + √0.0081", options: { A: "0.17", B: "0.170", C: "0.1700", D: "0.17" }, correctAnswer: "A" },
  { id: 65, text: "A shopkeeper buys an article for Rs. 400 and sells it for Rs. 500. Find his profit percentage.", options: { A: "20%", B: "25%", C: "30%", D: "35%" }, correctAnswer: "B" },
  { id: 66, text: "The perimeter of a square is 40 cm. Find its area.", options: { A: "80 cm²", B: "90 cm²", C: "100 cm²", D: "120 cm²" }, correctAnswer: "C" },
  { id: 67, text: "Two numbers are in the ratio 4:5. If 5 is added to each, the ratio becomes 5:6. Find the numbers.", options: { A: "20, 25", B: "15, 20", C: "16, 20", D: "12, 15" }, correctAnswer: "A" },
  { id: 68, text: "If a = 2, b = 3, then find the value of (a² + b² + 2ab)", options: { A: "20", B: "25", C: "30", D: "35" }, correctAnswer: "B" },
  { id: 69, text: "A man covers a distance of 150 km in 3 hours. If he covers 2/5 of the distance by car and the rest by train, find the distance covered by train.", options: { A: "60 km", B: "90 km", C: "75 km", D: "100 km" }, correctAnswer: "B" },
  { id: 70, text: "The HCF of 24, 36 and 48 is:", options: { A: "6", B: "8", C: "12", D: "24" }, correctAnswer: "C" },
  { id: 71, text: "Find the LCM of 12, 15 and 20.", options: { A: "30", B: "60", C: "90", D: "120" }, correctAnswer: "B" },
  { id: 72, text: "If the marked price of an article is Rs. 600 and it is sold at a discount of 15%, find the selling price.", options: { A: "Rs. 480", B: "Rs. 500", C: "Rs. 510", D: "Rs. 520" }, correctAnswer: "C" },
  { id: 73, text: "A triangle has sides of 3 cm, 4 cm and 5 cm. Find its area.", options: { A: "4 cm²", B: "5 cm²", C: "6 cm²", D: "12 cm²" }, correctAnswer: "C" },
  { id: 74, text: "Solve: 2x + 5 = 17", options: { A: "x = 5", B: "x = 6", C: "x = 7", D: "x = 8" }, correctAnswer: "B" },
  { id: 75, text: "The population of a town increases by 10% every year. If the present population is 10000, what will be the population after 2 years?", options: { A: "11000", B: "11500", C: "12000", D: "12100" }, correctAnswer: "D" },
];

// English Comprehension Questions (Expanded)
const englishQuestions: Question[] = [
  { id: 76, text: "Choose the correct synonym of 'ABUNDANT':", options: { A: "Scarce", B: "Plentiful", C: "Limited", D: "Rare" }, correctAnswer: "B" },
  { id: 77, text: "Choose the correct antonym of 'BENEVOLENT':", options: { A: "Kind", B: "Generous", C: "Malevolent", D: "Helpful" }, correctAnswer: "C" },
  { id: 78, text: "Choose the correctly spelled word:", options: { A: "Accomodation", B: "Accommodation", C: "Acommodation", D: "Acomodation" }, correctAnswer: "B" },
  { id: 79, text: "Fill in the blank: She _____ to the market yesterday.", options: { A: "go", B: "goes", C: "went", D: "going" }, correctAnswer: "C" },
  { id: 80, text: "Choose the correct meaning of the idiom 'A bird in the hand is worth two in the bush':", options: { A: "Birds are valuable", B: "It's better to have something certain than risk it for more", C: "Two birds are better than one", D: "Bushes have many birds" }, correctAnswer: "B" },
  { id: 81, text: "Select the correct word: The committee has _____ its decision.", options: { A: "made", B: "make", C: "makes", D: "making" }, correctAnswer: "A" },
  { id: 82, text: "Choose the correct one-word substitution for 'One who loves books':", options: { A: "Bibliophile", B: "Philatelist", C: "Numismatist", D: "Lexicographer" }, correctAnswer: "A" },
  { id: 83, text: "Identify the part of speech of the underlined word: She is a 'beautiful' girl.", options: { A: "Noun", B: "Verb", C: "Adjective", D: "Adverb" }, correctAnswer: "C" },
  { id: 84, text: "Choose the correct form of verb: He _____ (work) here for five years.", options: { A: "is working", B: "has been working", C: "worked", D: "works" }, correctAnswer: "B" },
  { id: 85, text: "Select the correct sentence:", options: { A: "Neither of the boys have come.", B: "Neither of the boys has come.", C: "Neither of the boys are come.", D: "Neither of the boys were come." }, correctAnswer: "B" },
  { id: 86, text: "Choose the correct synonym of 'EPHEMERAL':", options: { A: "Permanent", B: "Eternal", C: "Temporary", D: "Lasting" }, correctAnswer: "C" },
  { id: 87, text: "Fill in the blank with correct article: _____ Amazon is the largest river in South America.", options: { A: "A", B: "An", C: "The", D: "No article" }, correctAnswer: "C" },
  { id: 88, text: "Choose the correct antonym of 'OBSOLETE':", options: { A: "Outdated", B: "Modern", C: "Old", D: "Ancient" }, correctAnswer: "B" },
  { id: 89, text: "Select the correct meaning of the phrase 'To beat around the bush':", options: { A: "To hit bushes", B: "To avoid the main topic", C: "To work hard", D: "To walk in a garden" }, correctAnswer: "B" },
  { id: 90, text: "Choose the correct preposition: She is good _____ mathematics.", options: { A: "in", B: "at", C: "on", D: "with" }, correctAnswer: "B" },
  { id: 91, text: "Identify the error in the sentence: 'He don't know nothing about it.'", options: { A: "He don't", B: "know nothing", C: "about it", D: "No error" }, correctAnswer: "B" },
  { id: 92, text: "Choose the correct word for the blank: The police are _____ the thief.", options: { A: "looking after", B: "looking for", C: "looking into", D: "looking at" }, correctAnswer: "B" },
  { id: 93, text: "Select the correct passive voice of: 'She writes a letter.'", options: { A: "A letter is wrote by her.", B: "A letter is written by her.", C: "A letter was written by her.", D: "A letter writes by her." }, correctAnswer: "B" },
  { id: 94, text: "Choose the correct synonym of 'DILIGENT':", options: { A: "Lazy", B: "Hardworking", C: "Careless", D: "Slow" }, correctAnswer: "B" },
  { id: 95, text: "Fill in the blank: If I _____ you, I would accept the offer.", options: { A: "am", B: "was", C: "were", D: "be" }, correctAnswer: "C" },
  { id: 96, text: "Select the correct indirect speech: He said, 'I am busy.'", options: { A: "He said that he is busy.", B: "He said that he was busy.", C: "He said that I am busy.", D: "He said that I was busy." }, correctAnswer: "B" },
  { id: 97, text: "Choose the correct one-word substitution for 'One who walks in sleep':", options: { A: "Somnambulist", B: "Optimist", C: "Pessimist", D: "Philanthropist" }, correctAnswer: "A" },
  { id: 98, text: "Identify the figure of speech: 'Life is a journey.'", options: { A: "Simile", B: "Metaphor", C: "Personification", D: "Hyperbole" }, correctAnswer: "B" },
  { id: 99, text: "Choose the correct spelling:", options: { A: "Reciept", B: "Receipt", C: "Receit", D: "Recipt" }, correctAnswer: "B" },
  { id: 100, text: "Select the correct meaning of the idiom 'To kick the bucket':", options: { A: "To kick a bucket", B: "To die", C: "To start something", D: "To be angry" }, correctAnswer: "B" },
];

// RRB NTPC Questions
const rrbGeneralAwarenessQuestions: Question[] = [
  { id: 1, text: "The first railway line in India was opened between which two cities?", options: { A: "Mumbai and Thane", B: "Mumbai and Pune", C: "Chennai and Bangalore", D: "Kolkata and Delhi" }, correctAnswer: "A" },
  { id: 2, text: "Who is known as the 'Father of Indian Railways'?", options: { A: "Lord Dalhousie", B: "Lord Cornwallis", C: "Lord Wellesley", D: "Lord Bentinck" }, correctAnswer: "A" },
  { id: 3, text: "The headquarters of Indian Railways is located in:", options: { A: "Mumbai", B: "Kolkata", C: "New Delhi", D: "Chennai" }, correctAnswer: "C" },
  { id: 4, text: "Which is the longest railway platform in India?", options: { A: "Kharagpur", B: "Gorakhpur", C: "Howrah", D: "New Delhi" }, correctAnswer: "B" },
  { id: 5, text: "The first Indian to travel in a train was:", options: { A: "Raja Ram Mohan Roy", B: "Dadabhai Naoroji", C: "Jamsetjee Jejeebhoy", D: "None of these" }, correctAnswer: "C" },
  { id: 6, text: "Indian Railways is divided into how many zones?", options: { A: "16", B: "17", C: "18", D: "19" }, correctAnswer: "C" },
  { id: 7, text: "Which is the fastest train in India?", options: { A: "Rajdhani Express", B: "Shatabdi Express", C: "Vande Bharat Express", D: "Gatimaan Express" }, correctAnswer: "C" },
  { id: 8, text: "The Konkan Railway connects which two states?", options: { A: "Maharashtra and Goa", B: "Maharashtra and Karnataka", C: "Goa and Karnataka", D: "Maharashtra, Goa and Karnataka" }, correctAnswer: "D" },
  { id: 9, text: "Which gauge is used for maximum railway tracks in India?", options: { A: "Narrow Gauge", B: "Meter Gauge", C: "Broad Gauge", D: "Standard Gauge" }, correctAnswer: "C" },
  { id: 10, text: "The Railway Protection Force (RPF) was established in which year?", options: { A: "1957", B: "1958", C: "1959", D: "1960" }, correctAnswer: "B" },
  { id: 11, text: "Who appoints the Chairman of Railway Board?", options: { A: "President", B: "Prime Minister", C: "Railway Minister", D: "Appointments Committee of Cabinet" }, correctAnswer: "D" },
  { id: 12, text: "Which is the oldest working steam locomotive in India?", options: { A: "Fairy Queen", B: "Sher-e-Punjab", C: "Akbar", D: "Victoria" }, correctAnswer: "A" },
  { id: 13, text: "The 'Palace on Wheels' train starts from which city?", options: { A: "Mumbai", B: "Jaipur", C: "Delhi", D: "Udaipur" }, correctAnswer: "C" },
  { id: 14, text: "Indian Railway Catering and Tourism Corporation (IRCTC) was established in:", options: { A: "1999", B: "2000", C: "2001", D: "2002" }, correctAnswer: "A" },
  { id: 15, text: "Which zone is the largest in Indian Railways?", options: { A: "Northern Railway", B: "Western Railway", C: "Southern Railway", D: "Eastern Railway" }, correctAnswer: "A" },
  { id: 16, text: "The heritage train 'Toy Train' runs in which state?", options: { A: "Himachal Pradesh", B: "West Bengal", C: "Tamil Nadu", D: "Both A and B" }, correctAnswer: "D" },
  { id: 17, text: "Which railway station has the maximum number of platforms in India?", options: { A: "Howrah", B: "New Delhi", C: "Kolkata", D: "Mumbai Central" }, correctAnswer: "A" },
  { id: 18, text: "The first metro rail in India was started in:", options: { A: "Delhi", B: "Mumbai", C: "Kolkata", D: "Chennai" }, correctAnswer: "C" },
  { id: 19, text: "Which organization manufactures railway coaches in India?", options: { A: "BHEL", B: "BEL", C: "ICF", D: "SAIL" }, correctAnswer: "C" },
  { id: 20, text: "The longest railway tunnel in India is:", options: { A: "Pir Panjal Tunnel", B: "Karbude Tunnel", C: "Konkan Tunnel", D: "Banihal Tunnel" }, correctAnswer: "A" },
  { id: 21, text: "The Constitution of India was adopted on:", options: { A: "26 January 1950", B: "26 November 1949", C: "15 August 1947", D: "2 October 1950" }, correctAnswer: "B" },
  { id: 22, text: "Who was the Chairman of the Constituent Assembly?", options: { A: "Dr. B.R. Ambedkar", B: "Dr. Rajendra Prasad", C: "Jawaharlal Nehru", D: "Sardar Patel" }, correctAnswer: "B" },
  { id: 23, text: "The Preamble of the Constitution starts with which word?", options: { A: "India", B: "We", C: "The", D: "Our" }, correctAnswer: "B" },
  { id: 24, text: "How many schedules are there in the Indian Constitution?", options: { A: "8", B: "10", C: "12", D: "14" }, correctAnswer: "C" },
  { id: 25, text: "Who presides over the joint session of Parliament?", options: { A: "President", B: "Vice President", C: "Speaker of Lok Sabha", D: "Prime Minister" }, correctAnswer: "C" },
];

const rrbReasoningQuestions: Question[] = [
  { id: 26, text: "If TRAIN is coded as SQZHM, how is BUS coded?", options: { A: "CAR", B: "AVR", C: "ART", D: "CAT" }, correctAnswer: "B" },
  { id: 27, text: "Complete the series: 5, 10, 20, 40, ?", options: { A: "60", B: "70", C: "80", D: "90" }, correctAnswer: "C" },
  { id: 28, text: "Find the odd one out: Train, Bus, Car, Bicycle", options: { A: "Train", B: "Bus", C: "Car", D: "Bicycle" }, correctAnswer: "A" },
  { id: 29, text: "If A is taller than B and B is taller than C, who is the shortest?", options: { A: "A", B: "B", C: "C", D: "Cannot determine" }, correctAnswer: "C" },
  { id: 30, text: "Select the correct mirror image of 'RAIL' when mirror is placed on the right side.", options: { A: "LIAR", B: "LIA R", C: "JIA R", D: "RIAL" }, correctAnswer: "A" },
  { id: 31, text: "In a class of 30 students, A is 10th from the top. What is his rank from the bottom?", options: { A: "20", B: "21", C: "22", D: "19" }, correctAnswer: "B" },
  { id: 32, text: "If 4 + 3 = 28, 6 + 5 = 66, then 7 + 2 = ?", options: { A: "63", B: "49", C: "35", D: "47" }, correctAnswer: "A" },
  { id: 33, text: "Arrange in order: 1. Platform 2. Ticket 3. Train 4. Station", options: { A: "2, 4, 1, 3", B: "4, 2, 1, 3", C: "2, 1, 4, 3", D: "4, 1, 2, 3" }, correctAnswer: "A" },
  { id: 34, text: "Find the missing number: 3, 9, 27, 81, ?", options: { A: "162", B: "243", C: "324", D: "216" }, correctAnswer: "B" },
  { id: 35, text: "If South-East becomes North, then what will West become?", options: { A: "North-East", B: "South-West", C: "North-West", D: "East" }, correctAnswer: "A" },
  { id: 36, text: "Complete: A, Z, B, Y, C, ?", options: { A: "D", B: "X", C: "W", D: "V" }, correctAnswer: "B" },
  { id: 37, text: "Find the odd one: 9, 16, 25, 35", options: { A: "9", B: "16", C: "25", D: "35" }, correctAnswer: "D" },
  { id: 38, text: "Pointing to a man, a woman said, 'His brother is the only son of my father.' How is the woman related to the man?", options: { A: "Sister", B: "Mother", C: "Daughter", D: "Wife" }, correctAnswer: "A" },
  { id: 39, text: "If RAILWAY is written as YAWLIAR, how is STATION written?", options: { A: "NOITATS", B: "NOITTAS", C: "NOITSTA", D: "NOITSAT" }, correctAnswer: "A" },
  { id: 40, text: "Find the wrong number: 2, 5, 10, 17, 26, 37, 52", options: { A: "17", B: "26", C: "37", D: "52" }, correctAnswer: "D" },
  { id: 41, text: "Select the related word: Station : Train :: Airport : ?", options: { A: "Passenger", B: "Pilot", C: "Aeroplane", D: "Landing" }, correctAnswer: "C" },
  { id: 42, text: "Complete: 2, 3, 5, 7, 11, 13, ?", options: { A: "15", B: "17", C: "19", D: "21" }, correctAnswer: "B" },
  { id: 43, text: "If '×' means '+', '-' means '×', '+' means '÷', then 15 × 4 - 3 + 5 = ?", options: { A: "67", B: "57", C: "47", D: "37" }, correctAnswer: "B" },
  { id: 44, text: "Find the odd pair: 16-4, 25-5, 36-6, 42-7", options: { A: "16-4", B: "25-5", C: "36-6", D: "42-7" }, correctAnswer: "D" },
  { id: 45, text: "In a code, 2 = 8, 3 = 27, 4 = 64, then 5 = ?", options: { A: "125", B: "100", C: "150", D: "175" }, correctAnswer: "A" },
  { id: 46, text: "How many triangles are in a pentagon?", options: { A: "3", B: "4", C: "5", D: "6" }, correctAnswer: "A" },
  { id: 47, text: "Arrange: 1. Destination 2. Booking 3. Travel 4. Planning", options: { A: "4, 2, 3, 1", B: "2, 4, 3, 1", C: "4, 2, 1, 3", D: "2, 4, 1, 3" }, correctAnswer: "A" },
  { id: 48, text: "If P = 16, E = 5, N = 14, then PENCIL = ?", options: { A: "55", B: "56", C: "57", D: "58" }, correctAnswer: "A" },
  { id: 49, text: "Find the odd one: January, February, March, April, June", options: { A: "January", B: "February", C: "March", D: "June" }, correctAnswer: "B" },
  { id: 50, text: "If Monday is coded as 5, Wednesday is coded as 9, then Friday is coded as?", options: { A: "5", B: "6", C: "7", D: "8" }, correctAnswer: "B" },
];

const rrbMathematicsQuestions: Question[] = [
  { id: 51, text: "A train 200m long is moving at 60 km/h. How much time will it take to cross a pole?", options: { A: "10 sec", B: "12 sec", C: "15 sec", D: "20 sec" }, correctAnswer: "B" },
  { id: 52, text: "Two trains are moving in opposite directions at 40 km/h and 50 km/h. Their relative speed is:", options: { A: "80 km/h", B: "90 km/h", C: "10 km/h", D: "100 km/h" }, correctAnswer: "B" },
  { id: 53, text: "A train crosses a platform of 300m in 30 seconds. If the train is 200m long, what is its speed?", options: { A: "50 km/h", B: "60 km/h", C: "70 km/h", D: "80 km/h" }, correctAnswer: "B" },
  { id: 54, text: "The simple interest on Rs. 5000 at 4% per annum for 2 years is:", options: { A: "Rs. 200", B: "Rs. 400", C: "Rs. 300", D: "Rs. 500" }, correctAnswer: "B" },
  { id: 55, text: "If the ratio of two numbers is 3:4 and their sum is 70, find the larger number.", options: { A: "30", B: "40", C: "35", D: "45" }, correctAnswer: "B" },
  { id: 56, text: "A can do a work in 10 days, B in 15 days. Together they can do it in:", options: { A: "5 days", B: "6 days", C: "7 days", D: "8 days" }, correctAnswer: "B" },
  { id: 57, text: "The area of a circle with radius 14 cm is:", options: { A: "616 cm²", B: "516 cm²", C: "716 cm²", D: "416 cm²" }, correctAnswer: "A" },
  { id: 58, text: "If 30% of a number is 75, what is the number?", options: { A: "225", B: "250", C: "275", D: "300" }, correctAnswer: "B" },
  { id: 59, text: "The perimeter of a rectangle is 40 cm. If its length is 12 cm, what is its breadth?", options: { A: "6 cm", B: "8 cm", C: "10 cm", D: "14 cm" }, correctAnswer: "B" },
  { id: 60, text: "Find the average of 15, 20, 25, 30, 35:", options: { A: "23", B: "25", C: "27", D: "29" }, correctAnswer: "B" },
  { id: 61, text: "The LCM of 12 and 18 is:", options: { A: "24", B: "36", C: "48", D: "72" }, correctAnswer: "B" },
  { id: 62, text: "A discount of 20% on Rs. 500 gives:", options: { A: "Rs. 400", B: "Rs. 100", C: "Rs. 380", D: "Rs. 420" }, correctAnswer: "A" },
  { id: 63, text: "What is 40% of 250?", options: { A: "90", B: "100", C: "110", D: "120" }, correctAnswer: "B" },
  { id: 64, text: "The square root of 625 is:", options: { A: "20", B: "25", C: "30", D: "35" }, correctAnswer: "B" },
  { id: 65, text: "A car covers 180 km in 3 hours. Its speed is:", options: { A: "50 km/h", B: "60 km/h", C: "70 km/h", D: "80 km/h" }, correctAnswer: "B" },
  { id: 66, text: "The value of (5² + 12²) is:", options: { A: "169", B: "144", C: "156", D: "179" }, correctAnswer: "A" },
  { id: 67, text: "If 5x = 25, then x = ?", options: { A: "3", B: "4", C: "5", D: "6" }, correctAnswer: "C" },
  { id: 68, text: "The compound interest on Rs. 1000 at 10% per annum for 2 years is:", options: { A: "Rs. 200", B: "Rs. 210", C: "Rs. 220", D: "Rs. 221" }, correctAnswer: "B" },
  { id: 69, text: "A number increased by 20% gives 60. The original number is:", options: { A: "48", B: "50", C: "52", D: "54" }, correctAnswer: "B" },
  { id: 70, text: "The volume of a cube with side 5 cm is:", options: { A: "100 cm³", B: "125 cm³", C: "150 cm³", D: "175 cm³" }, correctAnswer: "B" },
  { id: 71, text: "Simplify: 2 + 3 × 4 - 2 =", options: { A: "10", B: "12", C: "14", D: "16" }, correctAnswer: "B" },
  { id: 72, text: "The HCF of 24 and 36 is:", options: { A: "6", B: "12", C: "18", D: "24" }, correctAnswer: "B" },
  { id: 73, text: "What is 1/2 + 1/4?", options: { A: "1/6", B: "3/4", C: "1/4", D: "2/6" }, correctAnswer: "B" },
  { id: 74, text: "A can finish a work in 12 days. He works for 4 days and then B finishes the remaining work in 8 days. B can finish the whole work in:", options: { A: "12 days", B: "16 days", C: "18 days", D: "24 days" }, correctAnswer: "D" },
  { id: 75, text: "The perimeter of a square is 48 cm. Its area is:", options: { A: "100 cm²", B: "144 cm²", C: "169 cm²", D: "196 cm²" }, correctAnswer: "B" },
];

// UPSC Prelims Questions
const upscHistoryQuestions: Question[] = [
  { id: 1, text: "The Indus Valley Civilization was discovered in which year?", options: { A: "1920", B: "1921", C: "1922", D: "1923" }, correctAnswer: "B" },
  { id: 2, text: "Who founded the Indian National Congress in 1885?", options: { A: "Mahatma Gandhi", B: "A.O. Hume", C: "Jawaharlal Nehru", D: "W.C. Bonnerjee" }, correctAnswer: "B" },
  { id: 3, text: "The Battle of Plassey was fought in:", options: { A: "1757", B: "1764", C: "1857", D: "1947" }, correctAnswer: "A" },
  { id: 4, text: "The Quit India Movement was launched in:", options: { A: "1940", B: "1942", C: "1944", D: "1946" }, correctAnswer: "B" },
  { id: 5, text: "Who was the first Governor General of independent India?", options: { A: "Lord Mountbatten", B: "C. Rajagopalachari", C: "Dr. Rajendra Prasad", D: "Jawaharlal Nehru" }, correctAnswer: "A" },
  { id: 6, text: "The Mauryan dynasty was founded by:", options: { A: "Ashoka", B: "Chandragupta Maurya", C: "Bindusara", D: "Brihadratha" }, correctAnswer: "B" },
  { id: 7, text: "The Khilafat Movement was started in:", options: { A: "1919", B: "1920", C: "1921", D: "1922" }, correctAnswer: "B" },
  { id: 8, text: "The Rowlatt Act was passed in:", options: { A: "1917", B: "1918", C: "1919", D: "1920" }, correctAnswer: "C" },
  { id: 9, text: "Who gave the slogan 'Do or Die'?", options: { A: "Subhas Chandra Bose", B: "Mahatma Gandhi", C: "Jawaharlal Nehru", D: "Sardar Patel" }, correctAnswer: "B" },
  { id: 10, text: "The first session of Indian National Congress was presided by:", options: { A: "A.O. Hume", B: "W.C. Bonnerjee", C: "Dadabhai Naoroji", D: "Badruddin Tyabji" }, correctAnswer: "B" },
  { id: 11, text: "The Jallianwala Bagh massacre took place in:", options: { A: "1917", B: "1918", C: "1919", D: "1920" }, correctAnswer: "C" },
  { id: 12, text: "Who founded the Servants of India Society?", options: { A: "Gopal Krishna Gokhale", B: "Bal Gangadhar Tilak", C: "Dadabhai Naoroji", D: "Lala Lajpat Rai" }, correctAnswer: "A" },
  { id: 13, text: "The Lucknow Pact was signed in:", options: { A: "1914", B: "1915", C: "1916", D: "1917" }, correctAnswer: "C" },
  { id: 14, text: "The Non-Cooperation Movement was launched in:", options: { A: "1919", B: "1920", C: "1921", D: "1922" }, correctAnswer: "B" },
  { id: 15, text: "Who was the founder of the Brahmo Samaj?", options: { A: "Raja Ram Mohan Roy", B: "Keshab Chandra Sen", C: "Debendranath Tagore", D: "Ishwar Chandra Vidyasagar" }, correctAnswer: "A" },
  { id: 16, text: "The Arya Samaj was founded by:", options: { A: "Swami Dayananda Saraswati", B: "Swami Vivekananda", C: "Raja Ram Mohan Roy", D: "Bankim Chandra Chatterjee" }, correctAnswer: "A" },
  { id: 17, text: "Who wrote 'Gita Rahasya'?", options: { A: "Bal Gangadhar Tilak", B: "Mahatma Gandhi", C: "Gopal Krishna Gokhale", D: "Aurobindo Ghosh" }, correctAnswer: "A" },
  { id: 18, text: "The Poona Pact was signed between:", options: { A: "Gandhi and Ambedkar", B: "Gandhi and Jinnah", C: "Gandhi and Nehru", D: "Gandhi and Patel" }, correctAnswer: "A" },
  { id: 19, text: "The Dandi March was associated with:", options: { A: "Non-Cooperation Movement", B: "Civil Disobedience Movement", C: "Quit India Movement", D: "Swadeshi Movement" }, correctAnswer: "B" },
  { id: 20, text: "Who founded the Indian Home Rule League?", options: { A: "Annie Besant", B: "Bal Gangadhar Tilak", C: "Both A and B", D: "None of these" }, correctAnswer: "C" },
  { id: 21, text: "The Simon Commission came to India in:", options: { A: "1926", B: "1927", C: "1928", D: "1929" }, correctAnswer: "C" },
  { id: 22, text: "The first Round Table Conference was held in:", options: { A: "1928", B: "1929", C: "1930", D: "1931" }, correctAnswer: "C" },
  { id: 23, text: "Who gave the slogan 'Inquilab Zindabad'?", options: { A: "Bhagat Singh", B: "Chandrashekhar Azad", C: "Subhas Chandra Bose", D: "Mahatma Gandhi" }, correctAnswer: "A" },
  { id: 24, text: "The Government of India Act 1935 introduced:", options: { A: "Dyarchy at Centre", B: "Provincial Autonomy", C: "Both A and B", D: "None of these" }, correctAnswer: "C" },
  { id: 25, text: "Who was known as the 'Iron Man of India'?", options: { A: "Jawaharlal Nehru", B: "Subhas Chandra Bose", C: "Sardar Vallabhbhai Patel", D: "Bhagat Singh" }, correctAnswer: "C" },
];

const upscGeographyQuestions: Question[] = [
  { id: 26, text: "Which is the longest river in India?", options: { A: "Godavari", B: "Ganga", C: "Brahmaputra", D: "Yamuna" }, correctAnswer: "B" },
  { id: 27, text: "The Himalayas are an example of:", options: { A: "Block Mountains", B: "Fold Mountains", C: "Residual Mountains", D: "Volcanic Mountains" }, correctAnswer: "B" },
  { id: 28, text: "Which is the largest state in India by area?", options: { A: "Madhya Pradesh", B: "Maharashtra", C: "Rajasthan", D: "Uttar Pradesh" }, correctAnswer: "C" },
  { id: 29, text: "The Tropic of Cancer does not pass through which state?", options: { A: "Rajasthan", B: "Gujarat", C: "Odisha", D: "West Bengal" }, correctAnswer: "C" },
  { id: 30, text: "Which river is known as the 'Sorrow of Bengal'?", options: { A: "Ganga", B: "Damodar", C: "Hooghly", D: "Teesta" }, correctAnswer: "B" },
  { id: 31, text: "The Western Ghats are also known as:", options: { A: "Sahyadri", B: "Nilgiri", C: "Vindhya", D: "Satpura" }, correctAnswer: "A" },
  { id: 32, text: "Which is the highest peak in South India?", options: { A: "Anaimudi", B: "Doddabetta", C: "Kalsubai", D: "Mahendragiri" }, correctAnswer: "A" },
  { id: 33, text: "The Chilika Lake is located in:", options: { A: "Andhra Pradesh", B: "Odisha", C: "West Bengal", D: "Tamil Nadu" }, correctAnswer: "B" },
  { id: 34, text: "Which is the largest delta in the world?", options: { A: "Nile Delta", B: "Ganga Delta", C: "Mississippi Delta", D: "Mekong Delta" }, correctAnswer: "B" },
  { id: 35, text: "The Black soil is also known as:", options: { A: "Alluvial soil", B: "Regur soil", C: "Laterite soil", D: "Red soil" }, correctAnswer: "B" },
  { id: 36, text: "Which state has the longest coastline in India?", options: { A: "Gujarat", B: "Maharashtra", C: "Tamil Nadu", D: "Kerala" }, correctAnswer: "A" },
  { id: 37, text: "The Thar Desert is located in which state?", options: { A: "Gujarat", B: "Rajasthan", C: "Haryana", D: "Punjab" }, correctAnswer: "B" },
  { id: 38, text: "Which river originates from the Gangotri Glacier?", options: { A: "Yamuna", B: "Ganga", C: "Brahmaputra", D: "Godavari" }, correctAnswer: "B" },
  { id: 39, text: "The Indian Standard Time is calculated from:", options: { A: "Chennai", B: "Delhi", C: "Allahabad", D: "Mirzapur" }, correctAnswer: "D" },
  { id: 40, text: "Which is the largest freshwater lake in India?", options: { A: "Dal Lake", B: "Wular Lake", C: "Loktak Lake", D: "Chilika Lake" }, correctAnswer: "B" },
  { id: 41, text: "The Deccan Plateau is located in:", options: { A: "North India", B: "South India", C: "East India", D: "West India" }, correctAnswer: "B" },
  { id: 42, text: "Which state is known as the 'Land of Five Rivers'?", options: { A: "Rajasthan", B: "Punjab", C: "Haryana", D: "Uttar Pradesh" }, correctAnswer: "B" },
  { id: 43, text: "The Siachen Glacier is located in:", options: { A: "Himachal Pradesh", B: "Uttarakhand", C: "Jammu and Kashmir", D: "Sikkim" }, correctAnswer: "C" },
  { id: 44, text: "Which is the smallest state in India by area?", options: { A: "Sikkim", B: "Tripura", C: "Goa", D: "Nagaland" }, correctAnswer: "C" },
  { id: 45, text: "The Sundarbans are famous for:", options: { A: "Tea plantations", B: "Mangrove forests", C: "Coffee plantations", D: "Rice fields" }, correctAnswer: "B" },
  { id: 46, text: "Which mountain range separates North India from South India?", options: { A: "Himalayas", B: "Vindhya Range", C: "Western Ghats", D: "Eastern Ghats" }, correctAnswer: "B" },
  { id: 47, text: "The Narmada River flows into:", options: { A: "Bay of Bengal", B: "Arabian Sea", C: "Indian Ocean", D: "Gulf of Khambhat" }, correctAnswer: "B" },
  { id: 48, text: "Which state has the maximum forest cover in India?", options: { A: "Arunachal Pradesh", B: "Madhya Pradesh", C: "Maharashtra", D: "Odisha" }, correctAnswer: "B" },
  { id: 49, text: "The Brahmaputra River originates from:", options: { A: "Nepal", B: "Tibet", C: "India", D: "Bhutan" }, correctAnswer: "B" },
  { id: 50, text: "Which is the driest place in India?", options: { A: "Jaisalmer", B: "Leh", C: "Bikaner", D: "Jodhpur" }, correctAnswer: "B" },
];

const upscPolityQuestions: Question[] = [
  { id: 51, text: "The Constitution of India was adopted on:", options: { A: "26 January 1950", B: "26 November 1949", C: "15 August 1947", D: "2 October 1950" }, correctAnswer: "B" },
  { id: 52, text: "Who was the Chairman of the Drafting Committee of the Constitution?", options: { A: "Dr. B.R. Ambedkar", B: "Dr. Rajendra Prasad", C: "Jawaharlal Nehru", D: "Sardar Patel" }, correctAnswer: "A" },
  { id: 53, text: "How many Articles were there in the original Constitution?", options: { A: "395", B: "400", C: "450", D: "500" }, correctAnswer: "A" },
  { id: 54, text: "The Preamble of the Constitution is based on:", options: { A: "American Constitution", B: "British Constitution", C: "French Constitution", D: "Objective Resolution" }, correctAnswer: "D" },
  { id: 55, text: "Which Article of the Constitution deals with the Right to Equality?", options: { A: "Article 14-18", B: "Article 19-22", C: "Article 23-24", D: "Article 25-28" }, correctAnswer: "A" },
  { id: 56, text: "The Fundamental Duties were added by which Amendment?", options: { A: "40th Amendment", B: "42nd Amendment", C: "44th Amendment", D: "46th Amendment" }, correctAnswer: "B" },
  { id: 57, text: "Who presides over the joint session of Parliament?", options: { A: "President", B: "Vice President", C: "Speaker of Lok Sabha", D: "Prime Minister" }, correctAnswer: "C" },
  { id: 58, text: "The maximum strength of Lok Sabha is:", options: { A: "500", B: "525", C: "545", D: "552" }, correctAnswer: "D" },
  { id: 59, text: "The Right to Property was removed as a Fundamental Right by which Amendment?", options: { A: "42nd Amendment", B: "44th Amendment", C: "46th Amendment", D: "52nd Amendment" }, correctAnswer: "B" },
  { id: 60, text: "Who appoints the Prime Minister of India?", options: { A: "Parliament", B: "President", C: "Supreme Court", D: "Election Commission" }, correctAnswer: "B" },
  { id: 61, text: "The concept of 'Secular' was added to the Preamble by which Amendment?", options: { A: "40th Amendment", B: "42nd Amendment", C: "44th Amendment", D: "46th Amendment" }, correctAnswer: "B" },
  { id: 62, text: "The Rajya Sabha is a:", options: { A: "Temporary House", B: "Permanent House", C: "Dissolved every 5 years", D: "Dissolved every 6 years" }, correctAnswer: "B" },
  { id: 63, text: "Who has the power to dissolve the Lok Sabha?", options: { A: "Prime Minister", B: "Speaker", C: "President", D: "Chief Justice" }, correctAnswer: "C" },
  { id: 64, text: "The minimum age to become the President of India is:", options: { A: "25 years", B: "30 years", C: "35 years", D: "40 years" }, correctAnswer: "C" },
  { id: 65, text: "Who administers the oath of office to the President?", options: { A: "Prime Minister", B: "Vice President", C: "Chief Justice of India", D: "Speaker" }, correctAnswer: "C" },
  { id: 66, text: "The Supreme Court has the power of:", options: { A: "Judicial Review", B: "Judicial Activism", C: "Both A and B", D: "None of these" }, correctAnswer: "C" },
  { id: 67, text: "How many schedules are there in the Constitution?", options: { A: "8", B: "10", C: "12", D: "14" }, correctAnswer: "C" },
  { id: 68, text: "The Directive Principles of State Policy are in:", options: { A: "Part III", B: "Part IV", C: "Part V", D: "Part VI" }, correctAnswer: "B" },
  { id: 69, text: "Who was the first Woman President of India?", options: { A: "Indira Gandhi", B: "Pratibha Patil", C: "Sushma Swaraj", D: "Sonia Gandhi" }, correctAnswer: "B" },
  { id: 70, text: "The Panchayati Raj System was constitutionalized by which Amendment?", options: { A: "71st Amendment", B: "72nd Amendment", C: "73rd Amendment", D: "74th Amendment" }, correctAnswer: "C" },
  { id: 71, text: "The Inter-State Council is established under which Article?", options: { A: "Article 261", B: "Article 262", C: "Article 263", D: "Article 264" }, correctAnswer: "C" },
  { id: 72, text: "The Election Commission is a:", options: { A: "One-member body", B: "Two-member body", C: "Three-member body", D: "Five-member body" }, correctAnswer: "C" },
  { id: 73, text: "Who appoints the Governor of a State?", options: { A: "Prime Minister", B: "President", C: "Chief Minister", D: "Chief Justice" }, correctAnswer: "B" },
  { id: 74, text: "The National Human Rights Commission was established in:", options: { A: "1991", B: "1992", C: "1993", D: "1994" }, correctAnswer: "C" },
  { id: 75, text: "Which Article deals with the Emergency provisions?", options: { A: "Article 352-360", B: "Article 356-360", C: "Article 352-365", D: "Article 350-360" }, correctAnswer: "A" },
];

// TSPSC Questions
const tspscGeneralStudiesQuestions: Question[] = [
  { id: 1, text: "The Kakatiya dynasty ruled from which city?", options: { A: "Hyderabad", B: "Warangal", C: "Golconda", D: "Nizamabad" }, correctAnswer: "B" },
  { id: 2, text: "Who founded the city of Hyderabad?", options: { A: "Quli Qutb Shah", B: "Muhammad Quli Qutb Shah", C: "Ibrahim Qutb Shah", D: "Jamsheed Quli Qutb Shah" }, correctAnswer: "B" },
  { id: 3, text: "The Golconda Fort was originally built by:", options: { A: "Kakatiyas", B: "Qutb Shahis", C: "Mughals", D: "Nizams" }, correctAnswer: "A" },
  { id: 4, text: "Which river flows through Hyderabad?", options: { A: "Godavari", B: "Krishna", C: "Musi", D: "Manjira" }, correctAnswer: "C" },
  { id: 5, text: "The Charminar was built in which year?", options: { A: "1589", B: "1591", C: "1593", D: "1595" }, correctAnswer: "B" },
  { id: 6, text: "The Hussain Sagar Lake was built by:", options: { A: "Quli Qutb Shah", B: "Ibrahim Quli Qutb Shah", C: "Muhammad Quli Qutb Shah", D: "Nizam" }, correctAnswer: "B" },
  { id: 7, text: "Telangana became the 29th state of India on:", options: { A: "2 June 2014", B: "15 August 2014", C: "26 January 2015", D: "1 November 2014" }, correctAnswer: "A" },
  { id: 8, text: "Who was the first Chief Minister of Telangana?", options: { A: "K. Chandrashekar Rao", B: "N. Chandrababu Naidu", C: "Y.S. Rajasekhara Reddy", D: "N. Kiran Kumar Reddy" }, correctAnswer: "A" },
  { id: 9, text: "The Warangal Fort was built by:", options: { A: "Prataparudra I", B: "Ganapathi Deva", C: "Rudrama Devi", D: "Prataparudra II" }, correctAnswer: "B" },
  { id: 10, text: "Which is the largest district in Telangana by area?", options: { A: "Mahbubnagar", B: "Nalgonda", C: "Khammam", D: "Adilabad" }, correctAnswer: "A" },
  { id: 11, text: "The Nagarjuna Sagar Dam is built on which river?", options: { A: "Godavari", B: "Krishna", C: "Musi", D: "Manjira" }, correctAnswer: "B" },
  { id: 12, text: "Who wrote 'Nanna Koduku'?", options: { A: "Kaloji Narayan Rao", B: "Dasarathi", C: "C. Narayana Reddy", D: "Sri Sri" }, correctAnswer: "A" },
  { id: 13, text: "The Salar Jung Museum is located in:", options: { A: "Secunderabad", B: "Hyderabad", C: "Warangal", D: "Karimnagar" }, correctAnswer: "B" },
  { id: 14, text: "The Ramappa Temple is located in:", options: { A: "Hanamkonda", B: "Warangal", C: "Mulugu", D: "Khammam" }, correctAnswer: "C" },
  { id: 15, text: "The Birla Mandir in Hyderabad is dedicated to:", options: { A: "Shiva", B: "Vishnu", C: "Venkateswara", D: "Rama" }, correctAnswer: "C" },
  { id: 16, text: "Which dynasty built the Thousand Pillar Temple?", options: { A: "Chalukyas", B: "Kakatiyas", C: "Qutb Shahis", D: "Nizams" }, correctAnswer: "B" },
  { id: 17, text: "The Nizam's Museum is located in:", options: { A: "Chowmahalla Palace", B: "Falaknuma Palace", C: "Purani Haveli", D: "King Kothi" }, correctAnswer: "C" },
  { id: 18, text: "Which is the state animal of Telangana?", options: { A: "Tiger", B: "Deer", C: "Elephant", D: "Leopard" }, correctAnswer: "B" },
  { id: 19, text: "The Rajiv Gandhi International Airport is located in:", options: { A: "Secunderabad", B: "Hyderabad", C: "Shamshabad", D: "Begumpet" }, correctAnswer: "C" },
  { id: 20, text: "Which river is known as the 'Ganga of the South'?", options: { A: "Godavari", B: "Krishna", C: "Tungabhadra", D: "Pennar" }, correctAnswer: "A" },
  { id: 21, text: "The first woman ruler of the Kakatiya dynasty was:", options: { A: "Rani Rudrama Devi", B: "Rani Durgavati", C: "Rani Lakshmibai", D: "Rani Padmini" }, correctAnswer: "A" },
  { id: 22, text: "The Bhongir Fort is located in which district?", options: { A: "Nalgonda", B: "Warangal", C: "Khammam", D: "Karimnagar" }, correctAnswer: "A" },
  { id: 23, text: "The Srisailam Dam is built on which river?", options: { A: "Godavari", B: "Krishna", C: "Tungabhadra", D: "Pennar" }, correctAnswer: "B" },
  { id: 24, text: "Which is the state bird of Telangana?", options: { A: "Peacock", B: "Sparrow", C: "Indian Roller", D: "Pigeon" }, correctAnswer: "C" },
  { id: 25, text: "The Qutb Shahi Tombs are located in:", options: { A: "Golconda", B: "Charminar", C: "Falaknuma", D: "Chowmahalla" }, correctAnswer: "A" },
];

const tspscReasoningQuestions: Question[] = [
  { id: 26, text: "Complete the series: 2, 6, 12, 20, 30, ?", options: { A: "40", B: "42", C: "44", D: "46" }, correctAnswer: "B" },
  { id: 27, text: "If TELANGANA is coded as GVOMZMZM, how is INDIA coded?", options: { A: "RMWRZ", B: "RMRWZ", C: "RMWRX", D: "RNXWR" }, correctAnswer: "A" },
  { id: 28, text: "Find the odd one: Hyderabad, Warangal, Secunderabad, Bangalore", options: { A: "Hyderabad", B: "Warangal", C: "Secunderabad", D: "Bangalore" }, correctAnswer: "D" },
  { id: 29, text: "If A is the brother of B, B is the sister of C, and C is the father of D, how is A related to D?", options: { A: "Uncle", B: "Nephew", C: "Cousin", D: "Grandfather" }, correctAnswer: "A" },
  { id: 30, text: "Find the missing number: 3, 8, 15, 24, 35, ?", options: { A: "46", B: "48", C: "50", D: "52" }, correctAnswer: "B" },
  { id: 31, text: "Arrange: 1. State 2. District 3. Village 4. Mandal", options: { A: "1, 2, 4, 3", B: "1, 2, 3, 4", C: "1, 4, 2, 3", D: "2, 1, 4, 3" }, correctAnswer: "A" },
  { id: 32, text: "If + means -, - means ×, × means ÷, ÷ means +, then 20 - 5 + 3 × 2 = ?", options: { A: "93", B: "103", C: "113", D: "123" }, correctAnswer: "A" },
  { id: 33, text: "Find the odd pair: 25-5, 36-6, 49-7, 64-9", options: { A: "25-5", B: "36-6", C: "49-7", D: "64-9" }, correctAnswer: "D" },
  { id: 34, text: "Select the related word: Hyderabad : Telangana :: Bangalore : ?", options: { A: "Tamil Nadu", B: "Karnataka", C: "Kerala", D: "Andhra Pradesh" }, correctAnswer: "B" },
  { id: 35, text: "Complete: A, C, F, J, ?", options: { A: "M", B: "N", C: "O", D: "P" }, correctAnswer: "C" },
  { id: 36, text: "If 5 + 3 = 28, 9 + 1 = 810, then 8 + 6 = ?", options: { A: "214", B: "2148", C: "2814", D: "2148" }, correctAnswer: "A" },
  { id: 37, text: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?", options: { A: "Mother", B: "Sister", C: "Aunt", D: "Grandmother" }, correctAnswer: "A" },
  { id: 38, text: "Find the missing number: 4, 9, 16, 25, 36, ?", options: { A: "47", B: "48", C: "49", D: "50" }, correctAnswer: "C" },
  { id: 39, text: "If TELUGU is written as UFMVHV, how is HINDI written?", options: { A: "IJOEJ", B: "IJOEJ", C: "IJOEI", D: "IJOFJ" }, correctAnswer: "A" },
  { id: 40, text: "How many triangles are there in a hexagon?", options: { A: "4", B: "6", C: "8", D: "10" }, correctAnswer: "B" },
  { id: 41, text: "Find the wrong number: 1, 4, 9, 16, 24, 36", options: { A: "4", B: "9", C: "24", D: "36" }, correctAnswer: "C" },
  { id: 42, text: "If South becomes North-East, then what will West become?", options: { A: "South-West", B: "North-West", C: "South-East", D: "East" }, correctAnswer: "C" },
  { id: 43, text: "Complete: 100, 81, 64, 49, 36, ?", options: { A: "20", B: "25", C: "30", D: "35" }, correctAnswer: "B" },
  { id: 44, text: "Select the odd one: Book, Pen, Pencil, Eraser", options: { A: "Book", B: "Pen", C: "Pencil", D: "Eraser" }, correctAnswer: "A" },
  { id: 45, text: "If + means ×, - means +, × means -, then 15 × 5 + 4 - 3 = ?", options: { A: "70", B: "72", C: "74", D: "76" }, correctAnswer: "B" },
  { id: 46, text: "Arrange: 1. Leaf 2. Tree 3. Branch 4. Root", options: { A: "4, 2, 3, 1", B: "2, 4, 3, 1", C: "4, 3, 2, 1", D: "2, 3, 4, 1" }, correctAnswer: "A" },
  { id: 47, text: "Find the odd one: January, March, April, May", options: { A: "January", B: "March", C: "April", D: "May" }, correctAnswer: "C" },
  { id: 48, text: "If A = 26, B = 25, C = 24, then D = ?", options: { A: "21", B: "22", C: "23", D: "24" }, correctAnswer: "C" },
  { id: 49, text: "In a row of 40 students, A is 12th from the left. What is his position from the right?", options: { A: "28", B: "29", C: "30", D: "31" }, correctAnswer: "B" },
  { id: 50, text: "Find the next letter: B, E, H, K, ?", options: { A: "M", B: "N", C: "O", D: "P" }, correctAnswer: "B" },
];

// SSC GD Questions
const gdGeneralAwarenessQuestions: Question[] = [
  { id: 1, text: "Who is known as the Father of the Nation?", options: { A: "Jawaharlal Nehru", B: "Mahatma Gandhi", C: "Sardar Patel", D: "B.R. Ambedkar" }, correctAnswer: "B" },
  { id: 2, text: "What is the capital of India?", options: { A: "Mumbai", B: "Kolkata", C: "New Delhi", D: "Chennai" }, correctAnswer: "C" },
  { id: 3, text: "Which is the largest state in India by area?", options: { A: "Madhya Pradesh", B: "Maharashtra", C: "Rajasthan", D: "Uttar Pradesh" }, correctAnswer: "C" },
  { id: 4, text: "The national flag of India was adopted on:", options: { A: "15 August 1947", B: "26 January 1950", C: "22 July 1947", D: "14 August 1947" }, correctAnswer: "C" },
  { id: 5, text: "Which is the national sport of India?", options: { A: "Cricket", B: "Hockey", C: "Football", D: "Kabaddi" }, correctAnswer: "B" },
  { id: 6, text: "Who wrote the national anthem of India?", options: { A: "Bankim Chandra Chatterjee", B: "Rabindranath Tagore", C: "Sarojini Naidu", D: "Subhas Chandra Bose" }, correctAnswer: "B" },
  { id: 7, text: "Which is the longest river in India?", options: { A: "Godavari", B: "Yamuna", C: "Ganga", D: "Brahmaputra" }, correctAnswer: "C" },
  { id: 8, text: "The Indian Constitution was adopted on:", options: { A: "26 November 1949", B: "26 January 1950", C: "15 August 1947", D: "2 October 1950" }, correctAnswer: "A" },
  { id: 9, text: "Which planet is closest to the Sun?", options: { A: "Venus", B: "Mars", C: "Mercury", D: "Earth" }, correctAnswer: "C" },
  { id: 10, text: "What is the chemical formula of salt?", options: { A: "NaCl", B: "KCl", C: "CaCl", D: "MgCl" }, correctAnswer: "A" },
  { id: 11, text: "Which vitamin is essential for blood clotting?", options: { A: "Vitamin A", B: "Vitamin C", C: "Vitamin D", D: "Vitamin K" }, correctAnswer: "D" },
  { id: 12, text: "The first Prime Minister of India was:", options: { A: "Mahatma Gandhi", B: "Jawaharlal Nehru", C: "Sardar Patel", D: "Dr. Rajendra Prasad" }, correctAnswer: "B" },
  { id: 13, text: "Which is the smallest state in India by area?", options: { A: "Sikkim", B: "Tripura", C: "Goa", D: "Nagaland" }, correctAnswer: "C" },
  { id: 14, text: "The Battle of Panipat was fought in which year?", options: { A: "1526", B: "1556", C: "1761", D: "1857" }, correctAnswer: "A" },
  { id: 15, text: "Which gas is most abundant in Earth's atmosphere?", options: { A: "Oxygen", B: "Carbon dioxide", C: "Nitrogen", D: "Hydrogen" }, correctAnswer: "C" },
  { id: 16, text: "The headquarters of UNESCO is located in:", options: { A: "Geneva", B: "New York", C: "Paris", D: "London" }, correctAnswer: "C" },
  { id: 17, text: "Which country is known as the 'Land of Rising Sun'?", options: { A: "China", B: "Japan", C: "Korea", D: "Thailand" }, correctAnswer: "B" },
  { id: 18, text: "The currency of USA is:", options: { A: "Pound", B: "Euro", C: "Dollar", D: "Yen" }, correctAnswer: "C" },
  { id: 19, text: "Which is the largest ocean in the world?", options: { A: "Atlantic Ocean", B: "Indian Ocean", C: "Pacific Ocean", D: "Arctic Ocean" }, correctAnswer: "C" },
  { id: 20, text: "Who discovered America?", options: { A: "Vasco da Gama", B: "Christopher Columbus", C: "Ferdinand Magellan", D: "James Cook" }, correctAnswer: "B" },
];

const gdReasoningQuestions: Question[] = [
  { id: 21, text: "Complete the series: 2, 4, 6, 8, ?", options: { A: "9", B: "10", C: "11", D: "12" }, correctAnswer: "B" },
  { id: 22, text: "If CAT is coded as 3120, then DOG is coded as?", options: { A: "4157", B: "4156", C: "4147", D: "4057" }, correctAnswer: "A" },
  { id: 23, text: "Find the odd one out: 4, 9, 16, 25, 30", options: { A: "4", B: "9", C: "16", D: "30" }, correctAnswer: "D" },
  { id: 24, text: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?", options: { A: "Mother", B: "Sister", C: "Aunt", D: "Grandmother" }, correctAnswer: "A" },
  { id: 25, text: "If + means -, - means ×, × means ÷, ÷ means +, then 8 + 4 - 2 × 2 ÷ 2 = ?", options: { A: "8", B: "10", C: "12", D: "14" }, correctAnswer: "B" },
  { id: 26, text: "Arrange in order: 1. Plant 2. Seed 3. Flower 4. Fruit", options: { A: "2, 1, 3, 4", B: "1, 2, 3, 4", C: "2, 1, 4, 3", D: "1, 2, 4, 3" }, correctAnswer: "A" },
  { id: 27, text: "Find the missing number: 5, 10, 15, 20, ?", options: { A: "24", B: "25", C: "26", D: "30" }, correctAnswer: "B" },
  { id: 28, text: "Select the correct mirror image: PENCIL", options: { A: "LICNEP", B: "JICNED", C: "LICNED", D: "LICNEQ" }, correctAnswer: "A" },
  { id: 29, text: "Which number will replace the question mark? 4 : 20 :: 6 : ?", options: { A: "30", B: "36", C: "42", D: "48" }, correctAnswer: "A" },
  { id: 30, text: "Find the odd word: Apple, Orange, Potato, Banana", options: { A: "Apple", B: "Orange", C: "Potato", D: "Banana" }, correctAnswer: "C" },
  { id: 31, text: "A is father of B. B is sister of C. How is A related to C?", options: { A: "Father", B: "Uncle", C: "Brother", D: "Grandfather" }, correctAnswer: "A" },
  { id: 32, text: "Complete: A, C, E, G, ?", options: { A: "H", B: "I", C: "J", D: "K" }, correctAnswer: "B" },
  { id: 33, text: "If SCHOOL is coded as TGNYPM, then COLLEGE is coded as?", options: { A: "DPMNFGF", B: "DPMNFGH", C: "DQMNFGF", D: "DPMNEGF" }, correctAnswer: "B" },
  { id: 34, text: "Find the missing term: 2, 3, 5, 8, 13, ?", options: { A: "18", B: "19", C: "20", D: "21" }, correctAnswer: "D" },
  { id: 35, text: "How many triangles are there in a star?", options: { A: "5", B: "6", C: "8", D: "10" }, correctAnswer: "D" },
];

const gdMathQuestions: Question[] = [
  { id: 36, text: "What is 25% of 200?", options: { A: "25", B: "50", C: "75", D: "100" }, correctAnswer: "B" },
  { id: 37, text: "Find the average of 10, 20, 30, 40, 50", options: { A: "25", B: "30", C: "35", D: "40" }, correctAnswer: "B" },
  { id: 38, text: "If a train travels at 60 km/hr, how much distance will it cover in 2.5 hours?", options: { A: "120 km", B: "130 km", C: "140 km", D: "150 km" }, correctAnswer: "D" },
  { id: 39, text: "What is the perimeter of a square with side 5 cm?", options: { A: "15 cm", B: "20 cm", C: "25 cm", D: "30 cm" }, correctAnswer: "B" },
  { id: 40, text: "Simplify: 2 + 3 × 4 - 6 ÷ 2", options: { A: "10", B: "11", C: "12", D: "13" }, correctAnswer: "B" },
  { id: 41, text: "The HCF of 12 and 18 is:", options: { A: "3", B: "6", C: "9", D: "12" }, correctAnswer: "B" },
  { id: 42, text: "If a number is increased by 20%, it becomes 60. What is the original number?", options: { A: "48", B: "50", C: "52", D: "54" }, correctAnswer: "B" },
  { id: 43, text: "The area of a rectangle with length 8 cm and breadth 5 cm is:", options: { A: "35 cm²", B: "40 cm²", C: "45 cm²", D: "50 cm²" }, correctAnswer: "B" },
  { id: 44, text: "Find the simple interest on Rs. 1000 at 5% per annum for 2 years.", options: { A: "Rs. 50", B: "Rs. 75", C: "Rs. 100", D: "Rs. 150" }, correctAnswer: "C" },
  { id: 45, text: "If 3x + 5 = 20, find x.", options: { A: "3", B: "4", C: "5", D: "6" }, correctAnswer: "C" },
  { id: 46, text: "The value of √144 is:", options: { A: "10", B: "11", C: "12", D: "13" }, correctAnswer: "C" },
  { id: 47, text: "A car covers 180 km in 3 hours. What is its speed?", options: { A: "50 km/hr", B: "60 km/hr", C: "70 km/hr", D: "80 km/hr" }, correctAnswer: "B" },
  { id: 48, text: "The ratio of 50 paise to Rs. 5 is:", options: { A: "1:10", B: "1:5", C: "1:2", D: "2:5" }, correctAnswer: "A" },
  { id: 49, text: "Find the LCM of 6 and 8.", options: { A: "12", B: "24", C: "36", D: "48" }, correctAnswer: "B" },
  { id: 50, text: "What is the value of 2³ + 3²?", options: { A: "15", B: "16", C: "17", D: "18" }, correctAnswer: "C" },
];

const gdEnglishQuestions: Question[] = [
  { id: 51, text: "Choose the correct synonym of 'HAPPY':", options: { A: "Sad", B: "Joyful", C: "Angry", D: "Tired" }, correctAnswer: "B" },
  { id: 52, text: "Choose the correct antonym of 'SUCCESS':", options: { A: "Victory", B: "Failure", C: "Win", D: "Achievement" }, correctAnswer: "B" },
  { id: 53, text: "Fill in the blank: He _____ going to school.", options: { A: "is", B: "are", C: "am", D: "be" }, correctAnswer: "A" },
  { id: 54, text: "Choose the correctly spelled word:", options: { A: "Recieve", B: "Receive", C: "Receeve", D: "Receve" }, correctAnswer: "B" },
  { id: 55, text: "Select the correct sentence:", options: { A: "He go to school daily.", B: "He goes to school daily.", C: "He going to school daily.", D: "He went to school daily." }, correctAnswer: "B" },
  { id: 56, text: "The plural of 'child' is:", options: { A: "Childs", B: "Children", C: "Childes", D: "Childern" }, correctAnswer: "B" },
  { id: 57, text: "Choose the correct preposition: The book is _____ the table.", options: { A: "in", B: "at", C: "on", D: "into" }, correctAnswer: "C" },
  { id: 58, text: "Select the correct meaning: 'To break the ice'", options: { A: "To break something", B: "To start a conversation", C: "To be cold", D: "To fight" }, correctAnswer: "B" },
  { id: 59, text: "Identify the noun: 'She is a good teacher.'", options: { A: "She", B: "good", C: "teacher", D: "is" }, correctAnswer: "C" },
  { id: 60, text: "Choose the correct article: _____ apple a day keeps the doctor away.", options: { A: "A", B: "An", C: "The", D: "No article" }, correctAnswer: "B" },
  { id: 61, text: "The feminine gender of 'Lion' is:", options: { A: "Lioness", B: "Lionet", C: "Lioness", D: "Lionette" }, correctAnswer: "C" },
  { id: 62, text: "Fill in the blank: I _____ finished my work.", options: { A: "has", B: "have", C: "is", D: "are" }, correctAnswer: "B" },
  { id: 63, text: "Choose the correct verb form: She _____ TV every evening.", options: { A: "watch", B: "watches", C: "watched", D: "watching" }, correctAnswer: "B" },
  { id: 64, text: "The opposite of 'HARD' is:", options: { A: "Difficult", B: "Soft", C: "Strong", D: "Tough" }, correctAnswer: "B" },
  { id: 65, text: "Select the correct question tag: You are coming, _____?", options: { A: "isn't you", B: "aren't you", C: "don't you", D: "won't you" }, correctAnswer: "B" },
  { id: 66, text: "Choose the correct word: The sun _____ in the east.", options: { A: "rise", B: "rises", C: "rising", D: "rose" }, correctAnswer: "B" },
  { id: 67, text: "Find the error: 'He don't know the answer.'", options: { A: "He", B: "don't", C: "know", D: "the answer" }, correctAnswer: "B" },
  { id: 68, text: "Choose the correct synonym of 'BEGIN':", options: { A: "End", B: "Start", C: "Stop", D: "Finish" }, correctAnswer: "B" },
  { id: 69, text: "Fill in the blank: There are _____ students in the class.", options: { A: "much", B: "many", C: "more", D: "most" }, correctAnswer: "B" },
  { id: 70, text: "Select the correct past tense: She _____ to the market yesterday.", options: { A: "go", B: "goes", C: "went", D: "going" }, correctAnswer: "C" },
];

// ==========================================
// EXAM GENERATORS
// ==========================================

// Helper function to shuffle questions
function shuffleQuestions<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let m = shuffled.length, t, i;
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  while (m) {
    i = Math.floor(random() * m--);
    t = shuffled[m];
    shuffled[m] = shuffled[i];
    shuffled[i] = t;
  }
  return shuffled;
}

// Generate SSC CGL Exam for specific year
function generateSSCCGLExam(year: number): ExamConfig {
  const seed = year * 1000;
  const shuffledReasoning = shuffleQuestions(reasoningQuestions, seed);
  const shuffledGA = shuffleQuestions(generalAwarenessQuestions, seed + 1);
  const shuffledQuant = shuffleQuestions(quantitativeQuestions, seed + 2);
  const shuffledEnglish = shuffleQuestions(englishQuestions, seed + 3);
  
  return {
    id: `ssc-cgl-tier1-${year}`,
    name: `SSC CGL Tier-1 ${year}`,
    fullName: `Staff Selection Commission - Combined Graduate Level Examination (Tier-1) ${year}`,
    description: 'Combined Graduate Level Examination for recruitment to various Group B and Group C posts',
    category: 'SSC',
    year: year,
    totalQuestions: 100,
    totalMarks: 200,
    durationMinutes: 60,
    negativeMarking: 0.50,
    passingPercentage: 30,
    sections: [
      { id: 'reasoning', name: 'General Intelligence & Reasoning', questions: shuffledReasoning.slice(0, 25).map((q, i) => ({...q, id: i + 1})), marksPerQuestion: 2 },
      { id: 'awareness', name: 'General Awareness', questions: shuffledGA.slice(0, 25).map((q, i) => ({...q, id: i + 26})), marksPerQuestion: 2 },
      { id: 'quantitative', name: 'Quantitative Aptitude', questions: shuffledQuant.slice(0, 25).map((q, i) => ({...q, id: i + 51})), marksPerQuestion: 2 },
      { id: 'english', name: 'English Comprehension', questions: shuffledEnglish.slice(0, 25).map((q, i) => ({...q, id: i + 76})), marksPerQuestion: 2 }
    ]
  };
}

// Generate SSC CHSL Exam for specific year
function generateSSCCHSLExam(year: number): ExamConfig {
  const seed = year * 2000;
  const shuffledReasoning = shuffleQuestions(reasoningQuestions, seed);
  const shuffledGA = shuffleQuestions(generalAwarenessQuestions, seed + 1);
  const shuffledQuant = shuffleQuestions(quantitativeQuestions, seed + 2);
  const shuffledEnglish = shuffleQuestions(englishQuestions, seed + 3);
  
  return {
    id: `ssc-chsl-${year}`,
    name: `SSC CHSL ${year}`,
    fullName: `Staff Selection Commission - Combined Higher Secondary Level Examination ${year}`,
    description: 'Combined Higher Secondary Level Examination for recruitment to LDC, PA, SA, and DEO posts',
    category: 'SSC',
    year: year,
    totalQuestions: 100,
    totalMarks: 200,
    durationMinutes: 60,
    negativeMarking: 0.50,
    passingPercentage: 33,
    sections: [
      { id: 'reasoning', name: 'General Intelligence', questions: shuffledReasoning.slice(0, 25).map((q, i) => ({...q, id: i + 1})), marksPerQuestion: 2 },
      { id: 'awareness', name: 'General Awareness', questions: shuffledGA.slice(0, 25).map((q, i) => ({...q, id: i + 26})), marksPerQuestion: 2 },
      { id: 'quantitative', name: 'Quantitative Aptitude', questions: shuffledQuant.slice(0, 25).map((q, i) => ({...q, id: i + 51})), marksPerQuestion: 2 },
      { id: 'english', name: 'English Language', questions: shuffledEnglish.slice(0, 25).map((q, i) => ({...q, id: i + 76})), marksPerQuestion: 2 }
    ]
  };
}

// Generate SSC GD Exam for specific year
function generateSSCGDExam(year: number): ExamConfig {
  const seed = year * 3000;
  const shuffledGA = shuffleQuestions(gdGeneralAwarenessQuestions, seed);
  const shuffledReasoning = shuffleQuestions(gdReasoningQuestions, seed + 1);
  const shuffledMath = shuffleQuestions(gdMathQuestions, seed + 2);
  const shuffledEnglish = shuffleQuestions(gdEnglishQuestions, seed + 3);
  
  return {
    id: `ssc-gd-${year}`,
    name: `SSC GD Constable ${year}`,
    fullName: `Staff Selection Commission - General Duty Constable Examination ${year}`,
    description: 'GD Constable Examination for recruitment to BSF, CISF, CRPF, SSB, ITBP, AR, NIA, SSF',
    category: 'SSC',
    year: year,
    totalQuestions: 80,
    totalMarks: 160,
    durationMinutes: 60,
    negativeMarking: 0.50,
    passingPercentage: 35,
    sections: [
      { id: 'awareness', name: 'General Awareness', questions: shuffledGA.slice(0, 20).map((q, i) => ({...q, id: i + 1})), marksPerQuestion: 2 },
      { id: 'reasoning', name: 'General Intelligence & Reasoning', questions: shuffledReasoning.slice(0, 20).map((q, i) => ({...q, id: i + 21})), marksPerQuestion: 2 },
      { id: 'mathematics', name: 'Elementary Mathematics', questions: shuffledMath.slice(0, 20).map((q, i) => ({...q, id: i + 41})), marksPerQuestion: 2 },
      { id: 'english', name: 'English/Hindi', questions: shuffledEnglish.slice(0, 20).map((q, i) => ({...q, id: i + 61})), marksPerQuestion: 2 }
    ]
  };
}

// Generate RRB NTPC Exam
function generateRRBNTPCExam(year: number): ExamConfig {
  const seed = year * 4000;
  const shuffledGA = shuffleQuestions(rrbGeneralAwarenessQuestions, seed);
  const shuffledReasoning = shuffleQuestions(rrbReasoningQuestions, seed + 1);
  const shuffledMath = shuffleQuestions(rrbMathematicsQuestions, seed + 2);
  
  return {
    id: `rrb-ntpc-${year}`,
    name: `RRB NTPC ${year}`,
    fullName: `Railway Recruitment Board - Non-Technical Popular Categories ${year}`,
    description: 'NTPC Examination for recruitment to various non-technical posts in Indian Railways',
    category: 'RRB',
    year: year,
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 90,
    negativeMarking: 0.33,
    passingPercentage: 40,
    sections: [
      { id: 'awareness', name: 'General Awareness', questions: shuffledGA.slice(0, 40).map((q, i) => ({...q, id: i + 1})), marksPerQuestion: 1 },
      { id: 'reasoning', name: 'General Intelligence & Reasoning', questions: shuffledReasoning.slice(0, 30).map((q, i) => ({...q, id: i + 41})), marksPerQuestion: 1 },
      { id: 'mathematics', name: 'Mathematics', questions: shuffledMath.slice(0, 30).map((q, i) => ({...q, id: i + 71})), marksPerQuestion: 1 }
    ]
  };
}

// Generate RRB Group D Exam
function generateRRBGroupDExam(year: number): ExamConfig {
  const seed = year * 5000;
  const shuffledGA = shuffleQuestions(rrbGeneralAwarenessQuestions, seed);
  const shuffledReasoning = shuffleQuestions(rrbReasoningQuestions, seed + 1);
  const shuffledMath = shuffleQuestions(rrbMathematicsQuestions, seed + 2);
  const shuffledScience = shuffleQuestions(generalAwarenessQuestions, seed + 4);
  
  return {
    id: `rrb-group-d-${year}`,
    name: `RRB Group D ${year}`,
    fullName: `Railway Recruitment Board - Group D Examination ${year}`,
    description: 'Group D Examination for recruitment to various Group D posts in Indian Railways',
    category: 'RRB',
    year: year,
    totalQuestions: 100,
    totalMarks: 100,
    durationMinutes: 90,
    negativeMarking: 0.33,
    passingPercentage: 40,
    sections: [
      { id: 'mathematics', name: 'Mathematics', questions: shuffledMath.slice(0, 25).map((q, i) => ({...q, id: i + 1})), marksPerQuestion: 1 },
      { id: 'reasoning', name: 'General Intelligence & Reasoning', questions: shuffledReasoning.slice(0, 30).map((q, i) => ({...q, id: i + 26})), marksPerQuestion: 1 },
      { id: 'science', name: 'General Science', questions: shuffledScience.slice(0, 25).map((q, i) => ({...q, id: i + 56})), marksPerQuestion: 1 },
      { id: 'awareness', name: 'General Awareness', questions: shuffledGA.slice(0, 20).map((q, i) => ({...q, id: i + 81})), marksPerQuestion: 1 }
    ]
  };
}

// Generate UPSC Prelims Exam
function generateUPSCPrelimsExam(year: number): ExamConfig {
  const seed = year * 6000;
  const shuffledHistory = shuffleQuestions(upscHistoryQuestions, seed);
  const shuffledGeography = shuffleQuestions(upscGeographyQuestions, seed + 1);
  const shuffledPolity = shuffleQuestions(upscPolityQuestions, seed + 2);
  const shuffledGA = shuffleQuestions(generalAwarenessQuestions, seed + 3);
  
  return {
    id: `upsc-prelims-${year}`,
    name: `UPSC Prelims ${year}`,
    fullName: `Union Public Service Commission - Civil Services Preliminary Examination ${year}`,
    description: 'Civil Services Preliminary Examination for recruitment to IAS, IPS, IFS, and other Group A services',
    category: 'UPSC',
    year: year,
    totalQuestions: 100,
    totalMarks: 200,
    durationMinutes: 120,
    negativeMarking: 0.66,
    passingPercentage: 33,
    sections: [
      { id: 'history', name: 'History & Culture', questions: shuffledHistory.slice(0, 25).map((q, i) => ({...q, id: i + 1})), marksPerQuestion: 2 },
      { id: 'geography', name: 'Geography', questions: shuffledGeography.slice(0, 25).map((q, i) => ({...q, id: i + 26})), marksPerQuestion: 2 },
      { id: 'polity', name: 'Polity & Governance', questions: shuffledPolity.slice(0, 25).map((q, i) => ({...q, id: i + 51})), marksPerQuestion: 2 },
      { id: 'general', name: 'General Studies', questions: shuffledGA.slice(0, 25).map((q, i) => ({...q, id: i + 76})), marksPerQuestion: 2 }
    ]
  };
}

// Generate TSPSC Exam
function generateTSPSCExam(year: number): ExamConfig {
  const seed = year * 7000;
  const shuffledGS = shuffleQuestions(tspscGeneralStudiesQuestions, seed);
  const shuffledReasoning = shuffleQuestions(tspscReasoningQuestions, seed + 1);
  const shuffledGA = shuffleQuestions(generalAwarenessQuestions, seed + 2);
  const shuffledQuant = shuffleQuestions(quantitativeQuestions, seed + 3);
  
  return {
    id: `tspsc-group-2-${year}`,
    name: `TSPSC Group-2 ${year}`,
    fullName: `Telangana State Public Service Commission - Group-2 Examination ${year}`,
    description: 'Group-2 Examination for recruitment to various executive posts in Telangana State',
    category: 'State PSC',
    year: year,
    totalQuestions: 100,
    totalMarks: 200,
    durationMinutes: 120,
    negativeMarking: 0.33,
    passingPercentage: 40,
    sections: [
      { id: 'telangana', name: 'Telangana State Studies', questions: shuffledGS.slice(0, 25).map((q, i) => ({...q, id: i + 1})), marksPerQuestion: 2 },
      { id: 'reasoning', name: 'General Intelligence & Reasoning', questions: shuffledReasoning.slice(0, 25).map((q, i) => ({...q, id: i + 26})), marksPerQuestion: 2 },
      { id: 'awareness', name: 'General Awareness', questions: shuffledGA.slice(0, 25).map((q, i) => ({...q, id: i + 51})), marksPerQuestion: 2 },
      { id: 'quantitative', name: 'Quantitative Aptitude', questions: shuffledQuant.slice(0, 25).map((q, i) => ({...q, id: i + 76})), marksPerQuestion: 2 }
    ]
  };
}

// Generate APPSC Exam
function generateAPPSCExam(year: number): ExamConfig {
  const seed = year * 8000;
  const shuffledGA = shuffleQuestions(generalAwarenessQuestions, seed);
  const shuffledReasoning = shuffleQuestions(reasoningQuestions, seed + 1);
  const shuffledQuant = shuffleQuestions(quantitativeQuestions, seed + 2);
  const shuffledEnglish = shuffleQuestions(englishQuestions, seed + 3);
  
  return {
    id: `appsc-group-2-${year}`,
    name: `APPSC Group-2 ${year}`,
    fullName: `Andhra Pradesh Public Service Commission - Group-2 Examination ${year}`,
    description: 'Group-2 Examination for recruitment to various executive posts in Andhra Pradesh State',
    category: 'State PSC',
    year: year,
    totalQuestions: 100,
    totalMarks: 200,
    durationMinutes: 120,
    negativeMarking: 0.33,
    passingPercentage: 40,
    sections: [
      { id: 'awareness', name: 'General Awareness', questions: shuffledGA.slice(0, 25).map((q, i) => ({...q, id: i + 1})), marksPerQuestion: 2 },
      { id: 'reasoning', name: 'General Intelligence & Reasoning', questions: shuffledReasoning.slice(0, 25).map((q, i) => ({...q, id: i + 26})), marksPerQuestion: 2 },
      { id: 'quantitative', name: 'Quantitative Aptitude', questions: shuffledQuant.slice(0, 25).map((q, i) => ({...q, id: i + 51})), marksPerQuestion: 2 },
      { id: 'english', name: 'English Language', questions: shuffledEnglish.slice(0, 25).map((q, i) => ({...q, id: i + 76})), marksPerQuestion: 2 }
    ]
  };
}

// ==========================================
// GENERATE ALL EXAMS
// ==========================================

// Generate exams for years 2024 to 2015 (10 years)
const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

// All SSC Exams
export const sscCGLExams: ExamConfig[] = years.map(year => generateSSCCGLExam(year));
export const sscCHSLExams: ExamConfig[] = years.map(year => generateSSCCHSLExam(year));
export const sscGDExams: ExamConfig[] = years.map(year => generateSSCGDExam(year));

// All RRB Exams
export const rrbNTPCExams: ExamConfig[] = years.map(year => generateRRBNTPCExam(year));
export const rrbGroupDExams: ExamConfig[] = years.map(year => generateRRBGroupDExam(year));

// All UPSC Exams
export const upscPrelimsExams: ExamConfig[] = years.map(year => generateUPSCPrelimsExam(year));

// All State PSC Exams
export const tspscExams: ExamConfig[] = years.map(year => generateTSPSCExam(year));
export const appscExams: ExamConfig[] = years.map(year => generateAPPSCExam(year));

// All exams combined
export const allExams: ExamConfig[] = [
  ...sscCGLExams,
  ...sscCHSLExams,
  ...sscGDExams,
  ...rrbNTPCExams,
  ...rrbGroupDExams,
  ...upscPrelimsExams,
  ...tspscExams,
  ...appscExams
];

// Categories for filtering
export const examCategories = [
  { id: 'all', name: 'All Exams', count: allExams.length },
  { id: 'SSC', name: 'SSC Exams', count: [...sscCGLExams, ...sscCHSLExams, ...sscGDExams].length },
  { id: 'RRB', name: 'RRB Exams', count: [...rrbNTPCExams, ...rrbGroupDExams].length },
  { id: 'UPSC', name: 'UPSC Exams', count: upscPrelimsExams.length },
  { id: 'State PSC', name: 'State PSC', count: [...tspscExams, ...appscExams].length }
];

// Exam types within each category
export const examTypes = {
  SSC: [
    { id: 'ssc-cgl', name: 'SSC CGL', exams: sscCGLExams },
    { id: 'ssc-chsl', name: 'SSC CHSL', exams: sscCHSLExams },
    { id: 'ssc-gd', name: 'SSC GD Constable', exams: sscGDExams }
  ],
  RRB: [
    { id: 'rrb-ntpc', name: 'RRB NTPC', exams: rrbNTPCExams },
    { id: 'rrb-group-d', name: 'RRB Group D', exams: rrbGroupDExams }
  ],
  UPSC: [
    { id: 'upsc-prelims', name: 'UPSC Prelims', exams: upscPrelimsExams }
  ],
  'State PSC': [
    { id: 'tspsc', name: 'TSPSC', exams: tspscExams },
    { id: 'appsc', name: 'APPSC', exams: appscExams }
  ]
};

// For backward compatibility
export const sscCGLExam = sscCGLExams[0];
export const sscCHSLExam = sscCHSLExams[0];
export const sscGDExam = sscGDExams[0];
