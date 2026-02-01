export let questionsAnswerArray = [
  {
    question: 'The sum of the first 10 terms of the AP: 2, 4, 6, 8, ... is',
    answer: ['100', '110', '120', '90', '80'],
    correctAnswer: '110',
    reason: 'For AP: a=2, d=2, n=10. Sum = n/2[2a+(n-1)d] = 5[4+18] = 5×22 = 110'
  },
  {
    question: 'The mid-point of the line segment joining (2, 3) and (4, 7) is',
    answer: ['(3,5)', '(2,4)', '(4,6)', '(3,4)', '(-3, 5)'],
    correctAnswer: '(3,5)',
    reason: 'Midpoint formula: ((x1+x2)/2, (y1+y2)/2) = ((2+4)/2, (3+7)/2) = (3,5)'
  },
  {
    question: 'The height of a tower is 50 m. The angle of elevation from a point on the ground to the top of the tower is 30°. The distance of the point from the base of the tower is',
    answer: ['50√3m', '75m', '100m', '50m', '25√3m'],
    correctAnswer: '50√3m',
    reason: 'tan 30° = height/distance ⇒ 1/√3 = 50/d ⇒ d = 50√3 m'
  },
  {
    question: 'If the angle of elevation of the sun increases, the length of the shadow of a pole',
    answer: ['Decrease', 'Increase', 'Remains the same', 'None of these'],
    correctAnswer: 'Decrease',
    reason: 'Shadow length = height × cot(angle). As angle increases, cot(angle) decreases.'
  },
  {
    question: 'The circumference of a circle with diameter 14 cm is',
    answer: ['44cm', '28cm', '88cm', '22cm', '176cm'],
    correctAnswer: '44cm',
    reason: 'Circumference = πd = (22/7)×14 = 44 cm'
  },
  {
    question: 'What is 15% of 200?',
    answer: ['30', '20', '15', '25', '35'],
    correctAnswer: '30',
    reason: '15% of 200 = (15/100)×200 = 0.15×200 = 30'
  },
  {
    question: 'Solve for x: 3x + 7 = 22',
    answer: ['5', '4', '6', '7', '8'],
    correctAnswer: '5',
    reason: '3x + 7 = 22 ⇒ 3x = 15 ⇒ x = 5'
  },
  {
    question: 'The area of a triangle with base 10 cm and height 6 cm is',
    answer: ['30 cm²', '60 cm²', '15 cm²', '20 cm²', '25 cm²'],
    correctAnswer: '30 cm²',
    reason: 'Area = ½ × base × height = ½ × 10 × 6 = 30 cm²'
  },
  {
    question: 'What is the value of π rounded to two decimal places?',
    answer: ['3.14', '3.16', '3.10', '3.18', '3.12'],
    correctAnswer: '3.14',
    reason: 'π is approximately 3.14159, which rounds to 3.14'
  },
  {
    question: 'Simplify: 2³ × 2²',
    answer: ['32', '16', '64', '8', '4'],
    correctAnswer: '32',
    reason: '2³ × 2² = 2^(3+2) = 2^5 = 32'
  },
  {
    question: 'The square root of 144 is',
    answer: ['12', '11', '13', '14', '10'],
    correctAnswer: '12',
    reason: '12 × 12 = 144, so √144 = 12'
  },
  {
    question: 'Convert 3/4 to decimal',
    answer: ['0.75', '0.25', '0.5', '0.3', '0.8'],
    correctAnswer: '0.75',
    reason: '3 ÷ 4 = 0.75'
  },
  {
    question: 'What is the mean of: 5, 7, 9, 11, 13?',
    answer: ['9', '8', '10', '11', '12'],
    correctAnswer: '9',
    reason: 'Mean = (5+7+9+11+13)/5 = 45/5 = 9'
  },
  {
    question: 'Calcuate: 5² + 12²',
    answer: ['169', '144', '194', '289', '89'],
    correctAnswer: '169',
    reason: '5² = 25, 12² = 144, 25 + 144 = 169'
  },
  {
    question: 'If a car travels 150 km in 2.5 hours, what is its average speed?',
    answer: ['60 km/h', '50 km/h', '65 km/h', '55 km/h', '70 km/h'],
    correctAnswer: '60 km/h',
    reason: 'Speed = Distance/Time = 150/2.5 = 60 km/h'
  },
  {
    question: 'What is 20% as a fraction in simplest form?',
    answer: ['1/5', '1/4', '1/3', '2/5', '3/10'],
    correctAnswer: '1/5',
    reason: '20% = 20/100 = 1/5'
  },
  {
    question: 'Find the perimeter of a rectangle with length 8 cm and width 5 cm',
    answer: ['26 cm', '40 cm', '13 cm', '30 cm', '20 cm'],
    correctAnswer: '26 cm',
    reason: 'Perimeter = 2(length + width) = 2(8+5) = 2×13 = 26 cm'
  },
  {
    question: 'What is the next number in the sequence: 2, 4, 8, 16, ___?',
    answer: ['32', '24', '20', '30', '28'],
    correctAnswer: '32',
    reason: 'Each number doubles the previous: 2×2=4, 4×2=8, 8×2=16, 16×2=32'
  },
  {
    question: 'Calculate: 7 × 8 ÷ 4',
    answer: ['14', '10', '12', '16', '18'],
    correctAnswer: '14',
    reason: '7 × 8 = 56, 56 ÷ 4 = 14'
  },
  {
    question: 'What is the prime factorization of 36?',
    answer: ['2² × 3²', '2³ × 3', '2 × 3³', '2² × 3³', '4 × 9'],
    correctAnswer: '2² × 3²',
    reason: '36 = 4 × 9 = 2² × 3²'
  },
  {
    question: 'Solve: 4x - 12 = 8',
    answer: ['5', '4', '6', '3', '7'],
    correctAnswer: '5',
    reason: '4x - 12 = 8 ⇒ 4x = 20 ⇒ x = 5'
  },
  {
    question: 'What is the volume of a cube with side length 3 cm?',
    answer: ['27 cm³', '9 cm³', '18 cm³', '12 cm³', '24 cm³'],
    correctAnswer: '27 cm³',
    reason: 'Volume = side³ = 3³ = 27 cm³'
  },
  {
    question: 'Convert 0.6 to a fraction in simplest form',
    answer: ['3/5', '2/3', '6/10', '1/2', '3/4'],
    correctAnswer: '3/5',
    reason: '0.6 = 6/10 = 3/5'
  },
  {
    question: 'What is the median of: 3, 5, 7, 9, 11?',
    answer: ['7', '5', '6', '8', '9'],
    correctAnswer: '7',
    reason: 'The middle value in the ordered set is 7'
  },
  {
    question: 'Calculate: 15 - 3 × 4 + 2',
    answer: ['5', '14', '10', '8', '6'],
    correctAnswer: '5',
    reason: 'Following BODMAS: 3×4=12, 15-12=3, 3+2=5'
  },
  {
    question: 'What is the area of a circle with radius 7 cm? (π = 22/7)',
    answer: ['154 cm²', '44 cm²', '88 cm²', '308 cm²', '22 cm²'],
    correctAnswer: '154 cm²',
    reason: 'Area = πr² = (22/7)×7×7 = 22×7 = 154 cm²'
  },
  {
    question: 'Simplify: (2x + 3)(x - 4)',
    answer: ['2x² - 5x - 12', '2x² + 5x - 12', '2x² - 5x + 12', '2x² + 11x - 12', 'x² - 5x - 12'],
    correctAnswer: '2x² - 5x - 12',
    reason: 'Using FOIL: 2x² - 8x + 3x - 12 = 2x² - 5x - 12'
  },
  {
    question: 'What is ¾ of 48?',
    answer: ['36', '32', '40', '24', '42'],
    correctAnswer: '36',
    reason: '¾ × 48 = (48÷4)×3 = 12×3 = 36'
  },
  {
    question: 'Solve for y: 2y/3 = 10',
    answer: ['15', '12', '18', '20', '10'],
    correctAnswer: '15',
    reason: '2y/3 = 10 ⇒ 2y = 30 ⇒ y = 15'
  },
  {
    question: 'What is the Greatest Common Factor of 24 and 36?',
    answer: ['12', '6', '8', '4', '18'],
    correctAnswer: '12',
    reason: 'Factors of 24: 1,2,3,4,6,8,12,24; Factors of 36: 1,2,3,4,6,9,12,18,36; GCF = 12'
  },
  {
    question: 'Calculate: 5! (5 factorial)',
    answer: ['120', '60', '24', '720', '100'],
    correctAnswer: '120',
    reason: '5! = 5×4×3×2×1 = 120'
  },
  {
    question: 'What is the slope of the line passing through (1,2) and (3,6)?',
    answer: ['2', '1', '3', '4', '0.5'],
    correctAnswer: '2',
    reason: 'Slope = (y2-y1)/(x2-x1) = (6-2)/(3-1) = 4/2 = 2'
  },
  {
    question: 'Convert 5 feet to inches',
    answer: ['60 inches', '50 inches', '48 inches', '72 inches', '36 inches'],
    correctAnswer: '60 inches',
    reason: '1 foot = 12 inches, so 5 feet = 5×12 = 60 inches'
  },
  {
    question: 'Evaluate: 3² + 4²',
    answer: ['25', '7', '12', '5', '16'],
    correctAnswer: '25',
    reason: '3² = 9, 4² = 16, 9 + 16 = 25'
  },
  {
    question: 'What is the probability of getting heads when flipping a fair coin?',
    answer: ['1/2', '1/4', '1/3', '2/3', '3/4'],
    correctAnswer: '1/2',
    reason: 'There are 2 equally likely outcomes, 1 favorable (heads)'
  },
  {
    question: 'Calculate: 0.25 × 80',
    answer: ['20', '25', '30', '15', '40'],
    correctAnswer: '20',
    reason: '0.25 = 1/4, so 1/4 of 80 = 20'
  },
  {
    question: 'What is the Least Common Multiple of 4 and 6?',
    answer: ['12', '24', '6', '8', '16'],
    correctAnswer: '12',
    reason: 'Multiples of 4: 4,8,12,16...; Multiples of 6: 6,12,18...; LCM = 12'
  },
  {
    question: 'Solve: 2x + 5 = 3x - 2',
    answer: ['7', '5', '3', '9', '11'],
    correctAnswer: '7',
    reason: '2x+5=3x-2 ⇒ 5+2=3x-2x ⇒ 7=x'
  },
  {
    question: 'What is 10 to the power of 3?',
    answer: ['1000', '100', '30', '300', '10'],
    correctAnswer: '1000',
    reason: '10³ = 10×10×10 = 1000'
  },
  {
    question: 'Find the perimeter of a square with side 6 cm',
    answer: ['24 cm', '36 cm', '12 cm', '18 cm', '30 cm'],
    correctAnswer: '24 cm',
    reason: 'Perimeter = 4 × side = 4×6 = 24 cm'
  },
  {
    question: 'What is 25% of 80?',
    answer: ['20', '25', '30', '15', '40'],
    correctAnswer: '20',
    reason: '25% of 80 = (25/100)×80 = 0.25×80 = 20'
  },
  {
    question: 'Simplify: √(16 × 9)',
    answer: ['12', '10', '14', '15', '18'],
    correctAnswer: '12',
    reason: '√(16×9) = √144 = 12'
  },
  {
    question: 'Solve: 5x - 3 = 2x + 9',
    answer: ['4', '3', '5', '6', '2'],
    correctAnswer: '4',
    reason: '5x-3=2x+9 ⇒ 5x-2x=9+3 ⇒ 3x=12 ⇒ x=4'
  },
  {
    question: 'What is the area of a parallelogram with base 12 cm and height 5 cm?',
    answer: ['60 cm²', '30 cm²', '50 cm²', '40 cm²', '55 cm²'],
    correctAnswer: '60 cm²',
    reason: 'Area = base × height = 12×5 = 60 cm²'
  },
  {
    question: 'Convert 3/8 to a decimal',
    answer: ['0.375', '0.3', '0.38', '0.33', '0.4'],
    correctAnswer: '0.375',
    reason: '3 ÷ 8 = 0.375'
  },
  {
    question: 'What is the range of: 4, 8, 3, 9, 5?',
    answer: ['6', '5', '7', '4', '8'],
    correctAnswer: '6',
    reason: 'Range = max - min = 9 - 3 = 6'
  },
  {
    question: 'Calculate: 1/2 + 1/3',
    answer: ['5/6', '2/5', '3/5', '1/6', '4/5'],
    correctAnswer: '5/6',
    reason: 'Common denominator 6: 3/6 + 2/6 = 5/6'
  },
  {
    question: 'What is the value of x in the equation: 2(x + 3) = 14?',
    answer: ['4', '5', '6', '7', '8'],
    correctAnswer: '4',
    reason: '2(x+3)=14 ⇒ x+3=7 ⇒ x=4'
  },
  {
    question: 'What is the surface area of a cube with side 2 cm?',
    answer: ['24 cm²', '8 cm²', '12 cm²', '16 cm²', '20 cm²'],
    correctAnswer: '24 cm²',
    reason: 'Surface area = 6 × side² = 6×4 = 24 cm²'
  },
  {
    question: 'Evaluate: 7² - 5²',
    answer: ['24', '12', '20', '14', '18'],
    correctAnswer: '24',
    reason: '7²=49, 5²=25, 49-25=24'
  },
  {
    question: 'What is the mode of: 3, 5, 5, 7, 7, 7, 9?',
    answer: ['7', '5', '6', '3', '9'],
    correctAnswer: '7',
    reason: '7 appears most frequently (3 times)'
  },
    {
    question: 'The sum of the first 12 terms of the AP: 3, 6, 9, 12, ... is',
    answer: ['234', '216', '252', '198', '180'],
    correctAnswer: '234',
    reason: 'For AP: a=3, d=3, n=12. Sum = n/2[2a+(n-1)d] = 6[6+33] = 6×39 = 234'
  },
  {
    question: 'The mid-point of the line segment joining (1, 2) and (5, 10) is',
    answer: ['(3,6)', '(2,4)', '(4,8)', '(3,5)', '(2,6)'],
    correctAnswer: '(3,6)',
    reason: 'Midpoint formula: ((x1+x2)/2, (y1+y2)/2) = ((1+5)/2, (2+10)/2) = (3,6)'
  },
  {
    question: 'The height of a building is 100 m. The angle of elevation from a point on the ground to the top of the building is 45°. The distance of the point from the base is',
    answer: ['100 m', '100√2 m', '50 m', '200 m', '50√3 m'],
    correctAnswer: '100 m',
    reason: 'tan 45° = height/distance ⇒ 1 = 100/d ⇒ d = 100 m'
  },
  {
    question: 'If the angle of elevation of the sun decreases, the length of the shadow of a tree',
    answer: ['Increase', 'Decrease', 'Remains the same', 'First increases then decreases'],
    correctAnswer: 'Increase',
    reason: 'Shadow length = height × cot(angle). As angle decreases, cot(angle) increases.'
  },
  {
    question: 'The circumference of a circle with diameter 21 cm is',
    answer: ['66 cm', '42 cm', '84 cm', '33 cm', '132 cm'],
    correctAnswer: '66 cm',
    reason: 'Circumference = πd = (22/7)×21 = 66 cm'
  },
  {
    question: 'What is 20% of 150?',
    answer: ['30', '25', '40', '35', '45'],
    correctAnswer: '30',
    reason: '20% of 150 = (20/100)×150 = 0.2×150 = 30'
  },
  {
    question: 'Solve for x: 4x + 5 = 25',
    answer: ['5', '4', '6', '7', '8'],
    correctAnswer: '5',
    reason: '4x + 5 = 25 ⇒ 4x = 20 ⇒ x = 5'
  },
  {
    question: 'The area of a triangle with base 12 cm and height 8 cm is',
    answer: ['48 cm²', '96 cm²', '24 cm²', '32 cm²', '40 cm²'],
    correctAnswer: '48 cm²',
    reason: 'Area = ½ × base × height = ½ × 12 × 8 = 48 cm²'
  },
  {
    question: 'What is the value of π rounded to three decimal places?',
    answer: ['3.142', '3.141', '3.140', '3.143', '3.139'],
    correctAnswer: '3.142',
    reason: 'π is approximately 3.14159, which rounds to 3.142'
  },
  {
    question: 'Simplify: 3² × 3³',
    answer: ['243', '81', '729', '27', '9'],
    correctAnswer: '243',
    reason: '3² × 3³ = 3^(2+3) = 3^5 = 243'
  },
  {
    question: 'The square root of 169 is',
    answer: ['13', '12', '14', '11', '15'],
    correctAnswer: '13',
    reason: '13 × 13 = 169, so √169 = 13'
  },
  {
    question: 'Convert 5/8 to decimal',
    answer: ['0.625', '0.5', '0.6', '0.58', '0.675'],
    correctAnswer: '0.625',
    reason: '5 ÷ 8 = 0.625'
  },
  {
    question: 'What is the mean of: 8, 10, 12, 14, 16?',
    answer: ['12', '10', '11', '13', '14'],
    correctAnswer: '12',
    reason: 'Mean = (8+10+12+14+16)/5 = 60/5 = 12'
  },
  {
    question: 'Calculate: 6² + 8²',
    answer: ['100', '48', '64', '14', '86'],
    correctAnswer: '100',
    reason: '6² = 36, 8² = 64, 36 + 64 = 100'
  },
  {
    question: 'If a train travels 240 km in 3 hours, what is its average speed?',
    answer: ['80 km/h', '70 km/h', '90 km/h', '75 km/h', '85 km/h'],
    correctAnswer: '80 km/h',
    reason: 'Speed = Distance/Time = 240/3 = 80 km/h'
  },
  {
    question: 'What is 25% as a fraction in simplest form?',
    answer: ['1/4', '1/5', '1/3', '2/5', '3/10'],
    correctAnswer: '1/4',
    reason: '25% = 25/100 = 1/4'
  },
  {
    question: 'Find the perimeter of a rectangle with length 10 cm and width 6 cm',
    answer: ['32 cm', '60 cm', '16 cm', '40 cm', '24 cm'],
    correctAnswer: '32 cm',
    reason: 'Perimeter = 2(length + width) = 2(10+6) = 2×16 = 32 cm'
  },
  {
    question: 'What is the next number in the sequence: 3, 6, 12, 24, ___?',
    answer: ['48', '36', '30', '42', '54'],
    correctAnswer: '48',
    reason: 'Each number doubles the previous: 3×2=6, 6×2=12, 12×2=24, 24×2=48'
  },
  {
    question: 'Calculate: 9 × 6 ÷ 3',
    answer: ['18', '12', '15', '21', '27'],
    correctAnswer: '18',
    reason: '9 × 6 = 54, 54 ÷ 3 = 18'
  },
  {
    question: 'What is the prime factorization of 48?',
    answer: ['2⁴ × 3', '2³ × 3²', '2² × 3³', '2⁵ × 3', '4 × 12'],
    correctAnswer: '2⁴ × 3',
    reason: '48 = 16 × 3 = 2⁴ × 3'
  },
  {
    question: 'Solve: 5x - 15 = 10',
    answer: ['5', '4', '6', '7', '8'],
    correctAnswer: '5',
    reason: '5x - 15 = 10 ⇒ 5x = 25 ⇒ x = 5'
  },
  {
    question: 'What is the volume of a cube with side length 4 cm?',
    answer: ['64 cm³', '16 cm³', '32 cm³', '24 cm³', '48 cm³'],
    correctAnswer: '64 cm³',
    reason: 'Volume = side³ = 4³ = 64 cm³'
  },
  {
    question: 'Convert 0.75 to a fraction in simplest form',
    answer: ['3/4', '2/3', '75/100', '1/2', '4/5'],
    correctAnswer: '3/4',
    reason: '0.75 = 75/100 = 3/4'
  },
  {
    question: 'What is the median of: 2, 4, 6, 8, 10?',
    answer: ['6', '5', '7', '8', '4'],
    correctAnswer: '6',
    reason: 'The middle value in the ordered set is 6'
  },
  {
    question: 'Calculate: 20 - 4 × 3 + 2',
    answer: ['10', '14', '16', '8', '12'],
    correctAnswer: '10',
    reason: 'Following BODMAS: 4×3=12, 20-12=8, 8+2=10'
  },
  {
    question: 'What is the area of a circle with radius 14 cm? (π = 22/7)',
    answer: ['616 cm²', '88 cm²', '154 cm²', '308 cm²', '44 cm²'],
    correctAnswer: '616 cm²',
    reason: 'Area = πr² = (22/7)×14×14 = 22×28 = 616 cm²'
  },
  {
    question: 'Simplify: (3x + 2)(x - 3)',
    answer: ['3x² - 7x - 6', '3x² + 7x - 6', '3x² - 7x + 6', '3x² + x - 6', 'x² - 7x - 6'],
    correctAnswer: '3x² - 7x - 6',
    reason: 'Using FOIL: 3x² - 9x + 2x - 6 = 3x² - 7x - 6'
  },
  {
    question: 'What is ⅔ of 36?',
    answer: ['24', '18', '27', '30', '21'],
    correctAnswer: '24',
    reason: '⅔ × 36 = (36÷3)×2 = 12×2 = 24'
  },
  {
    question: 'Solve for y: 3y/4 = 12',
    answer: ['16', '12', '15', '18', '20'],
    correctAnswer: '16',
    reason: '3y/4 = 12 ⇒ 3y = 48 ⇒ y = 16'
  },
  {
    question: 'What is the Greatest Common Factor of 18 and 45?',
    answer: ['9', '3', '6', '15', '5'],
    correctAnswer: '9',
    reason: 'Factors of 18: 1,2,3,6,9,18; Factors of 45: 1,3,5,9,15,45; GCF = 9'
  },
  {
    question: 'Calculate: 6! (6 factorial)',
    answer: ['720', '120', '360', '240', '600'],
    correctAnswer: '720',
    reason: '6! = 6×5×4×3×2×1 = 720'
  },
  {
    question: 'What is the slope of the line passing through (0,0) and (4,8)?',
    answer: ['2', '1', '4', '0.5', '8'],
    correctAnswer: '2',
    reason: 'Slope = (y2-y1)/(x2-x1) = (8-0)/(4-0) = 8/4 = 2'
  },
  {
    question: 'Convert 6 feet to inches',
    answer: ['72 inches', '60 inches', '84 inches', '48 inches', '36 inches'],
    correctAnswer: '72 inches',
    reason: '1 foot = 12 inches, so 6 feet = 6×12 = 72 inches'
  },
  {
    question: 'Calculate: 5² + 5²',
    answer: ['50', '25', '10', '20', '100'],
    correctAnswer: '50',
    reason: '5² = 25, 25 + 25 = 50'
  },
  {
    question: 'What is the probability of getting a 3 when rolling a fair die?',
    answer: ['1/6', '1/3', '1/2', '1/4', '2/3'],
    correctAnswer: '1/6',
    reason: 'There are 6 equally likely outcomes, 1 favorable (3)'
  },
  {
    question: 'Calculate: 0.5 × 120',
    answer: ['60', '50', '70', '40', '80'],
    correctAnswer: '60',
    reason: '0.5 = 1/2, so 1/2 of 120 = 60'
  },
  {
    question: 'What is the Least Common Multiple of 5 and 8?',
    answer: ['40', '20', '45', '30', '35'],
    correctAnswer: '40',
    reason: 'Multiples of 5: 5,10,15,20,25,30,35,40...; Multiples of 8: 8,16,24,32,40...; LCM = 40'
  },
  {
    question: 'Solve: 4x + 3 = 5x - 2',
    answer: ['5', '3', '7', '9', '11'],
    correctAnswer: '5',
    reason: '4x+3=5x-2 ⇒ 3+2=5x-4x ⇒ 5=x'
  },
  {
    question: 'What is 10 to the power of 4?',
    answer: ['10000', '1000', '100', '40', '400'],
    correctAnswer: '10000',
    reason: '10⁴ = 10×10×10×10 = 10000'
  },
  {
    question: 'Find the perimeter of a square with side 8 cm',
    answer: ['32 cm', '64 cm', '16 cm', '24 cm', '40 cm'],
    correctAnswer: '32 cm',
    reason: 'Perimeter = 4 × side = 4×8 = 32 cm'
  },
  {
    question: 'What is 30% of 90?',
    answer: ['27', '30', '33', '24', '21'],
    correctAnswer: '27',
    reason: '30% of 90 = (30/100)×90 = 0.3×90 = 27'
  },
  {
    question: 'Simplify: √(25 × 16)',
    answer: ['20', '10', '15', '25', '30'],
    correctAnswer: '20',
    reason: '√(25×16) = √400 = 20'
  },
  {
    question: 'Solve: 7x - 4 = 3x + 12',
    answer: ['4', '3', '5', '6', '2'],
    correctAnswer: '4',
    reason: '7x-4=3x+12 ⇒ 7x-3x=12+4 ⇒ 4x=16 ⇒ x=4'
  },
  {
    question: 'What is the area of a parallelogram with base 15 cm and height 6 cm?',
    answer: ['90 cm²', '45 cm²', '75 cm²', '60 cm²', '80 cm²'],
    correctAnswer: '90 cm²',
    reason: 'Area = base × height = 15×6 = 90 cm²'
  },
  {
    question: 'Convert 7/8 to a decimal',
    answer: ['0.875', '0.7', '0.78', '0.87', '0.85'],
    correctAnswer: '0.875',
    reason: '7 ÷ 8 = 0.875'
  },
  {
    question: 'What is the range of: 2, 5, 7, 3, 9?',
    answer: ['7', '5', '6', '4', '8'],
    correctAnswer: '7',
    reason: 'Range = max - min = 9 - 2 = 7'
  },
  {
    question: 'Calculate: 1/3 + 1/4',
    answer: ['7/12', '2/7', '1/2', '5/12', '4/7'],
    correctAnswer: '7/12',
    reason: 'Common denominator 12: 4/12 + 3/12 = 7/12'
  },
  {
    question: 'What is the value of x in the equation: 3(x + 2) = 18?',
    answer: ['4', '5', '6', '7', '8'],
    correctAnswer: '4',
    reason: '3(x+2)=18 ⇒ x+2=6 ⇒ x=4'
  },
  {
    question: 'What is the surface area of a cube with side 3 cm?',
    answer: ['54 cm²', '27 cm²', '36 cm²', '48 cm²', '60 cm²'],
    correctAnswer: '54 cm²',
    reason: 'Surface area = 6 × side² = 6×9 = 54 cm²'
  },
  {
    question: 'Calculate: 8² - 6²',
    answer: ['28', '16', '20', '24', '12'],
    correctAnswer: '28',
    reason: '8²=64, 6²=36, 64-36=28'
  },
  {
    question: 'What is the mode of: 2, 4, 4, 6, 6, 6, 8?',
    answer: ['6', '4', '5', '2', '8'],
    correctAnswer: '6',
    reason: '6 appears most frequently (3 times)'
  }
];