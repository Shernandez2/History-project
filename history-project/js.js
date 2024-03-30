const giangaticContainer = document.getElementById('container');
const secondContainer = document.getElementById('container2');
const buttonRight1 = document.getElementById('choose-right1');
const buttonLeft1 = document.getElementById('choose-left1');
const buttonRight2 = document.getElementById('choose-right2');
const buttonLeft2 = document.getElementById('choose-left2');
const buttonRight3 = document.getElementById('choose-right3');
const buttonLeft3 = document.getElementById('choose-left3');
const buttonRight4 = document.getElementById('choose-right4');
const buttonLeft4 = document.getElementById('choose-left4');
const buttonRight5 = document.getElementById('choose-right5');
const buttonLeft5 = document.getElementById('choose-left5');


const topText = document.getElementById('top-text');
const leftHeader = document.getElementById('left-header');
const rightHeader = document.getElementById('right-header');
const paragraph1 = document.getElementById('text1');
const paragraph2 = document.getElementById('text2');
const paragraph3 = document.getElementById('text3');
const paragraph4 = document.getElementById('text4');
const paragraph5 = document.getElementById('text5');
const paragraph6 = document.getElementById('text6');

function choice1(selection){
    if(selection == "left"){
        leftHeader.textContent = "The Economic Stability and Recovery Act of 1930"
        paragraph1.textContent = "The purpose of this Act is to mitigate the economic turmoil and stabilize the financial system during the Great Depression. This legislation aims to restore confidence, stimulate economic activity, and alleviate the hardships faced by individuals and businesses across the nation."
        paragraph2.textContent = "The National Economic Recovery Board (NERB) is hereby established as a bipartisan body comprising economic experts, industry leaders, and government officials. The NERB shall be tasked with formulating comprehensive strategies and policies to address the root causes of the economic crisis, promote sustainable growth, and ensure equitable distribution of resources.";
        paragraph3.textContent = "The NEC shall convene regular meetings and collaborate with relevant agencies to coordinate economic policies and initiatives.";
        rightHeader.textContent = "National Industrial Recovery Act (NIRA)"
        paragraph4.textContent = "Recognizing the urgent need to address the economic crisis gripping the nation during the Great Depression, the government enacts the National Industrial Recovery Act (NIRA) to promote industrial recovery, stabilize employment, and stimulate economic growth through cooperative action among government, industry, and labor. ";
        paragraph5.textContent = "The National Recovery Administration (NRA) shall be established to oversee the implementation of the NIRA and facilitate cooperation between government, industry, and labor. The NRA shall have the authority to develop and enforce industry-wide codes of fair competition, which shall include provisions for minimum wages, maximum working hours, and fair labor practices.";
        paragraph6.textContent = "The NRA shall work collaboratively with representatives from various sectors of the economy to draft and administer these codes, ensuring they address the unique needs and challenges of each industry.";
        topText.textContent = "You are Correct!";
        buttonLeft1.style.display = "none"
        buttonRight1.style.display = "none"
        buttonRight2.style.display = "block"
        buttonLeft2.style.display = "block"
        topText.style.color = "green";
    }else if(selection == "right"){
        topText.textContent = "You are wrong!";
        topText.style.color = "red";

    }
};

function choice2(selection){
    if(selection == "left"){
        topText.textContent = "you are incorrect!";
        topText.style.color = "red";
    }else if( selection == "right"){
        leftHeader.textContent = "Agricultural Adjustment Act (AAA)"
        paragraph1.textContent = "In response to the severe economic hardships faced by farmers during the Great Depression and the resulting agricultural crisis, the government enacts the Agricultural Adjustment Act (AAA) to stabilize farm incomes, restore agricultural prices, and revitalize rural communities.        "
        paragraph2.textContent = "The Agricultural Adjustment Administration (AAA) shall be established to administer the provisions of this Act and coordinate efforts to achieve its objectives. The AAA shall work in collaboration with farmers, agricultural organizations, and relevant government agencies to implement programs aimed at reducing surplus production, stabilizing prices, and promoting soil conservation.";
        paragraph3.textContent = "The AAA shall work in collaboration with farmers, agricultural organizations, and relevant government agencies to implement programs aimed at reducing surplus production, stabilizing prices, and promoting soil conservation.";
        rightHeader.textContent = "The Economic Recovery and Stability Act of 1933"
        paragraph4.textContent = "Act is to address the severe economic challenges confronting the United States during the Great Depression. It aims to restore confidence, foster economic recovery, and alleviate the hardships endured by American citizens.";
        paragraph5.textContent = "The National Economic Stabilization Board (NESB) is hereby established as an independent agency responsible for coordinating and implementing measures to stabilize the economy. The NESB shall consist of experts in economics, finance, and public policy appointed by the President, with the mandate to analyze economic data, develop policy recommendations, and oversee the execution of economic stabilization programs.";
        paragraph6.textContent = "The NESB shall collaborate with federal agencies, state governments, and private-sector stakeholders to devise comprehensive strategies for addressing unemployment, stabilizing prices, and restoring consumer confidence.";
        topText.textContent = "You are Right!";
        buttonLeft2.style.display = "none"
        buttonRight2.style.display = "none"
        buttonRight3.style.display = "block"
        buttonLeft3.style.display = "block"
        topText.style.color = "green";
    
    }
}

function choice3(selection){
    if(selection =="left"){
    leftHeader.textContent = "Securities Exchange Act"
    paragraph1.textContent = "In light of the financial turmoil gripping the nation during the Great Depression and the need to restore investor confidence, regulate securities markets, and prevent fraudulent practices, the government enacts the Securities Exchange Act to promote transparency, fairness, and stability in the trading of securities."
    paragraph2.textContent = "The Securities and Exchange Commission (SEC) shall be established as an independent agency tasked with administering and enforcing the provisions of this Act. The SEC shall have regulatory authority over securities exchanges, securities brokers and dealers, investment advisers, and other participants in the securities markets.";
    paragraph3.textContent = "The SEC shall establish rules and regulations governing the conduct of securities brokers and dealers, including requirements for fair dealing, record-keeping, and disclosure of conflicts of interest.";
    rightHeader.textContent = "The Economic Revitalization and Stability Act of 1934"
    paragraph4.textContent = "Act made to stimulate economic recovery and restore stability during the Great Depression. This legislation aims to address unemployment, promote industrial growth, and foster confidence in the financial system.";
    paragraph5.textContent = "The National Economic Revitalization Commission (NERC) is hereby established as a bipartisan body tasked with formulating and implementing strategies to revitalize the economy. The NERC shall consist of economic experts, business leaders, and government officials appointed by the President, with the mandate to assess economic conditions, identify barriers to recovery, and recommend policy interventions.";
    paragraph6.textContent = "The NERC shall collaborate with federal agencies, state governments, and private-sector stakeholders to coordinate efforts to create jobs, spur investment, and promote sustainable economic growth.";
    topText.textContent = "You are Correct!";
    buttonLeft3.style.display = "none"
    buttonRight3.style.display = "none"
    buttonRight4.style.display = "block"
    buttonLeft4.style.display = "block"
    topText.style.color = "green";
    }else if(selection == "right"){
        topText.textContent = "you are wrong!"
        topText.style.color = "red";
    }
}

function choice4(selection){
    if(selection == "left"){
        leftHeader.textContent = "Federal Deposit Insurance Corporation (FDIC) Act"
        paragraph1.textContent = "In response to the widespread bank failures and the loss of public confidence in the banking system during the Great Depression, the government enacts the Federal Deposit Insurance Corporation (FDIC) Act to establish a federal deposit insurance program, safeguard bank deposits, and restore stability to the financial sector."
        paragraph2.textContent = "The Federal Deposit Insurance Corporation (FDIC) shall be established as an independent agency of the federal government, with the primary purpose of insuring deposits in banks and thrift institutions. The FDIC shall be responsible for administering the deposit insurance program, regulating insured depository institutions, and managing resolutions of failed banks and thrifts.";
        paragraph3.textContent = "The FDIC shall provide deposit insurance coverage for eligible deposits in insured depository institutions, including commercial banks, savings banks, and savings and loan associations.";
        rightHeader.textContent = "The Economic Recovery and Stability Act of 1935"
        paragraph4.textContent = "The purpose of this Act is to address the ongoing economic challenges faced by the United States during the Great Depression. It aims to stimulate economic recovery, alleviate unemployment, and restore confidence in the financial system.";
        paragraph5.textContent = " The National Economic Stability Commission (NESC) is hereby established as a bipartisan entity tasked with developing and implementing policies to promote economic stability and growth. The NESC shall comprise economic experts, industry representatives, and government officials appointed by the President, with the responsibility to analyze economic trends, identify areas of weakness, and recommend measures to address them.";
        paragraph6.textContent = "The NESC shall collaborate with federal agencies, state governments, and private-sector stakeholders to coordinate efforts aimed at enhancing productivity, fostering innovation, and ensuring equitable distribution of economic opportunities.";
        topText.textContent = "You are Rightttttt!";
        buttonLeft4.style.display = "none";
        buttonRight4.style.display = "none";
        buttonRight5.style.display = "block";
        buttonLeft5.style.display = "block";
        topText.style.color = "green";
    }else if(selection == "right"){
        topText.textContent = "You are Incorrect!"
        topText.style.color = "red";
    }
}

function choice5(selection){
    if(selection == "left"){
        topText.textContent = "You are Wrong!!!!!!"
        topText.style.color = "red";
    }else if(selection == "right"){
        leftHeader.textContent = "The Economic Stability and Recovery Act of 1936"
        paragraph1.textContent = "The purpose of this Act is to address the persistent economic challenges facing the United States during the Great Depression. It aims to stimulate economic recovery, promote sustainable growth, and alleviate the hardships endured by American citizens."
        paragraph2.textContent = "The National Economic Stability Council (NESC) is hereby established as an advisory body tasked with formulating and coordinating policies to promote economic stability and prosperity. The NESC shall be composed of leading economists, industry experts, and government officials appointed by the President, with the mandate to analyze economic trends, identify systemic risks, and recommend measures to mitigate them.";
        paragraph3.textContent = "The NESC shall collaborate with federal agencies, state governments, and private-sector stakeholders to develop comprehensive strategies for addressing unemployment, stabilizing prices, and restoring consumer confidence.";
        rightHeader.textContent = "Social Security Act"
        paragraph4.textContent = "In recognition of the profound economic insecurity facing many Americans during the Great Depression and the need to provide for the well-being of vulnerable populations, the government enacts the Social Security Act to establish a comprehensive system of social insurance and assistance, ensuring economic security and promoting the general welfare of the people.";
        paragraph5.textContent = "The government shall establish an Old Age Insurance program to provide retirement benefits to eligible individuals aged 65 and older, based on their work history and contributions to the system. Eligible individuals shall receive monthly retirement benefits calculated according to a formula based on their earnings history and years of covered employment, subject to specified minimum and maximum benefit levels.";
        paragraph6.textContent = "The government shall establish an Aid to Dependent Children program to provide financial assistance to eligible families with children in cases where a parent is absent, incapacitated, or deceased.";
        topText.textContent = "You are Correct!!!!!!";
        topText.style.color = "green";
        giangaticContainer.style.display = "none";
        secondContainer.style.display = "block"

        // buttonLeft5.style.display = "none"
        // buttonRight5.style.display = "none"
    }
}