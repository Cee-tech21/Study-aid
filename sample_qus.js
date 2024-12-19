const sampleQ = [  
    {  
    "Question: What is the role of aldosterone in regulating blood pressure?" :  

    "Answer: Aldosterone, a hormone produced by the adrenal glands, helps regulate blood pressure by promoting the reabsorption of sodium and water in the kidneys. This increases blood volume and, consequently, blood pressure."  
    },
    {  
    "Question: How does the antidiuretic hormone (ADH) affect water balance in the body?" :  

    "Answer: Antidiuretic hormone (ADH) helps regulate water balance by increasing water reabsorption in the kidneys, reducing urine output. This action helps conserve water in the body, especially during dehydration or low blood volume."  
    },

    {  
    "Question: What role do the kidneys play in acid-base balance?" :  

    "Answer: The kidneys help maintain acid-base balance by excreting hydrogen ions (acid) and reabsorbing bicarbonate ions (base) from urine. This regulation helps keep the blood's pH within a narrow, optimal range for proper cellular function."  
    },
    {  
    "Question: What is the function of the adrenal glands?" :  

    "Answer: The adrenal glands produce a variety of hormones, including adrenaline, cortisol, and aldosterone. These hormones are involved in the body’s response to stress, regulation of metabolism, immune response, and maintenance of blood pressure and electrolyte balance."  
    },
    {  
    "Question: How does parathyroid hormone regulate calcium levels in the body?" :  

    "Answer: Parathyroid hormone (PTH) is secreted by the parathyroid glands and helps regulate calcium levels in the blood. It increases blood calcium by stimulating the release of calcium from bones, enhancing calcium absorption in the intestines, and reducing calcium excretion in the kidneys."  
    }
]
console.log("sample question 2:",Object.keys(sampleQ[2])[0])
console.log("answer:", sampleQ[2][Object.keys(sampleQ[2])[0]])
console.log("container items: ", sampleQ.length)

