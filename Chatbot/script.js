// document.addEventListener("DOMContentLoaded", function () {
//     const chatIcon = document.getElementById("chat-icon");
//     const chatPopup = document.getElementById("chat-popup");
//     const chatClose = document.getElementById("chat-close");
//     const userInput = document.getElementById("user-input");
//     const chatContent = document.getElementById("chat-content");
//     const sendBtn = document.getElementById("send-btn");

//     chatIcon.addEventListener("click", function () {
//         chatPopup.style.display = "block";
//     });

//     chatClose.addEventListener("click", function () {
//         chatPopup.style.display = "none";
//     });

//     sendBtn.addEventListener("click", sendMessage);

//     userInput.addEventListener("keyup", function (event) {
//         if (event.key === "Enter") {
//             sendMessage();
//         }
//     });

//     function sendMessage() {
//         const userMessage = userInput.value;
//         if (userMessage.trim() !== "") {
//             const userMessageDiv = document.createElement("div");
//             userMessageDiv.className = "chat-message";
//             userMessageDiv.textContent = "You: " + userMessage;
//             chatContent.appendChild(userMessageDiv);

//             const botMessage = findAnswer(userMessage);
//             const botMessageDiv = document.createElement("div");
//             botMessageDiv.className = "chat-message bot-message";
//             botMessageDiv.textContent = "Bot: " + botMessage;
//             chatContent.appendChild(botMessageDiv);

//             chatContent.scrollTop = chatContent.scrollHeight;

//             userInput.value = "";
//         }
//     }

//     function findAnswer(userInput) {
//         const faq = {
//             "stress": "Stress is a natural response to challenges or demands. It can affect your mental and physical well-being.",
//             "manage stress": "Managing stress involves practicing relaxation techniques, exercise, and seeking support from friends and family.",
//             "anxiety": "Anxiety is a feeling of unease or worry, often about situations or events. It can manifest both physically and mentally.",
//             "cope with anxiety": "Coping with anxiety can involve deep breathing, mindfulness, and seeking professional help if needed.",
//             "how do I cope with stress?": "Managing stress is important for your mental well-being. Try practicing deep breathing, mindfulness, or engaging in physical activities you enjoy.",
//             "I'm feeling anxious": "It's okay to feel anxious. Try grounding exercises like the 5-4-3-2-1 technique. Remember to take deep breaths and consider talking to a mental health professional.",
//             "I'm sad": "I'm sorry to hear that you're feeling sad. Reach out to a friend, engage in activities you love, or consider talking to a therapist about your feelings.",
//             "I need someone to talk to": "I'm here to listen. You can also reach out to a friend, family member, or a mental health helpline. Remember, you don't have to go through this alone.",
//             "how can I improve my self-esteem?": "Building self-esteem takes time. Practice self-care, set achievable goals, and challenge negative self-talk. Celebrate your achievements, no matter how small.",
//             "what is mindfulness?": "Mindfulness involves being present in the moment without judgment. You can practice mindfulness through meditation, deep breathing, or simply focusing on your senses.",
//             "how do I deal with social anxiety?": "Facing social anxiety can be challenging. Start small by gradually exposing yourself to social situations. Remember, it's okay to seek professional guidance for this.",
//             "tips for better sleep": "Good sleep is important for mental health. Create a calming bedtime routine, limit screen time before bed, and ensure your sleep environment is comfortable and dark.",
//             "how do I support a friend with depression?": "Offer a listening ear and let them know you're there for them. Encourage them to seek professional help and avoid giving unsolicited advice.",
//             "what are some relaxation techniques?": "Relaxation techniques like progressive muscle relaxation and guided imagery can help reduce stress. Find what works best for you.",
//             "how do I set boundaries for my mental health?": "Setting boundaries is crucial. Communicate your limits to others, prioritize self-care, and don't feel guilty about saying no.",
//             "signs of a panic attack": "Panic attacks can cause rapid heartbeat, shortness of breath, sweating, and a sense of impending doom. Remember to breathe deeply and seek help if needed.",
//             "I'm feeling overwhelmed": "Feeling overwhelmed is common. Break tasks into smaller steps, ask for support, and practice self-compassion.",
//             "how do I build resilience?": "Resilience comes from facing challenges. Cultivate a strong support network, practice gratitude, and develop problem-solving skills.",
//             "how do I practice gratitude?": "Gratitude can improve your well-being. Start a gratitude journal, take a moment each day to reflect on positives, and express appreciation to others.",
//             "I'm struggling with low motivation": "Low motivation happens to everyone. Set achievable goals, celebrate small wins, and establish a routine to help improve motivation.",
//             "how can I help someone with suicidal thoughts?": "Take them seriously and encourage them to talk to a mental health professional. Remove any means of self-harm and stay with them if possible.",
//             "how do I handle setbacks in recovery?": "Setbacks are part of recovery. Be kind to yourself, reach out for support, and remember that progress is not always linear.",
//             "tips for better sleep": "Prioritize a consistent sleep schedule, create a calming bedtime routine, and limit caffeine and screen time before bed.",
//             "how do I practice mindfulness?": "Mindfulness involves being present in the moment. Start with mindful breathing, body scans, or mindful walking.",
//             "how can I manage social isolation?": "Social isolation can be tough. Stay connected virtually, join online communities, and consider volunteering or joining virtual events.",
//             "how do I find a therapist?": "Finding the right therapist is important. Consider your preferences, insurance coverage, and the therapist's expertise. Reach out to professional organizations for recommendations.",
//             "how do I practice self-compassion?": "Self-compassion is important. Treat yourself with the same kindness you'd offer a friend. Challenge self-criticism and practice self-kindness.",
//             "how do I manage work-related stress?": "Balancing work and well-being is crucial. Prioritize tasks, take breaks, and communicate boundaries with colleagues.",
//             "how do I cope with loneliness?": "Loneliness can be challenging. Reach out to friends, engage in social activities, and consider joining clubs or groups with shared interests.",
//             "how can I boost my self-esteem?": "Boosting self-esteem takes time. Focus on your strengths, practice positive self-talk, and engage in activities that make you feel accomplished.",
//             "how do I handle negative emotions?": "Negative emotions are normal. Identify the emotion, acknowledge it without judgment, and consider healthy ways to express or manage it.",
//             "how can I improve my body image?": "Improving body image is a journey. Focus on what your body can do, challenge unrealistic beauty ideals, and surround yourself with positive influences.",
//             "how do I manage my time better?": "Effective time management supports mental well-being. Prioritize tasks, create a schedule, and don't forget to allocate time for self-care.",
//             "how do I build healthy relationships?": "Healthy relationships are essential. Communicate openly, set boundaries, and prioritize mutual respect and understanding.",
//             "how do I practice acceptance?": "Practicing acceptance can reduce suffering. Recognize that some things are beyond your control. Focus on your responses and choices.",
//             "how can I engage in positive self-talk?": "Positive self-talk can boost your mood. Replace self-criticism with self-encouragement. Challenge negative thoughts with evidence.",
//             "how do I manage anger?": "Managing anger involves staying calm. Take deep breaths, remove yourself from the situation if needed, and find healthy ways to release frustration.",
//             "how can I build a support network?": "Building a support network is valuable. Connect with friends, family, support groups, and seek out like-minded individuals.",
//             "how do I handle perfectionism?": "Perfectionism can be stressful. Embrace imperfections, set realistic goals, and remind yourself that mistakes are opportunities to learn.",
//             "how do I practice relaxation techniques?": "Relaxation techniques like progressive muscle relaxation, deep breathing, and visualization can help reduce stress. Practice regularly.",
//             "how can I cultivate a positive mindset?": "Cultivating a positive mindset takes practice. Focus on gratitude, challenge negative thoughts, and engage in activities that bring joy.",
//             "how do I handle uncertainty?": "Uncertainty is a challenge. Focus on what you can control, practice mindfulness, and remind yourself that uncertainty is a natural part of life.",
//             "how can I manage caregiver stress?": "Caregiving can be demanding. Take breaks, ask for help, and prioritize self-care to prevent burnout.",
//             "how do I build assertiveness skills?": "Building assertiveness takes practice. Clearly express your needs and boundaries while respecting others' rights and feelings.",
//             "how can I manage obsessive thoughts?": "Obsessive thoughts can be distressing. Practice mindfulness, consider exposure therapy, and seek support from a mental health professional.",
//             "how do I handle changes and transitions?": "Changes can be unsettling. Focus on adaptability, view challenges as opportunities for growth, and seek support when needed.",
//             "how can I practice self-forgiveness?": "Self-forgiveness is healing. Recognize mistakes as human experiences, learn from them, and practice self-compassion.",
//             "how do I improve my communication skills?": "Effective communication is key. Listen actively, use 'I' statements, and practice empathy to foster understanding.",
//             "how can I manage rumination?": "Rumination can worsen mood. Redirect your thoughts, engage in activities you enjoy, and practice grounding techniques.",
//             "how do I handle triggers for anxiety?": "Anxiety triggers can be managed. Identify triggers, develop coping strategies, and consider exposure therapy with a professional.",
//             "how can I practice mindfulness in daily life?": "Mindfulness is a lifestyle. Pay attention to your senses, be present during activities, and practice gratitude.",
//             " how do I cope with grief and loss?": "Grief is personal. Allow yourself to mourn, seek support from loved ones, and consider grief counseling if needed.",
//             "how can I manage test anxiety?": "Test anxiety is common. Prepare well, practice relaxation techniques before exams, and challenge negative thoughts about performance.",
//             "how do I build a morning routine for better mental health?": "A morning routine sets the tone. Include activities like exercise, meditation, or journaling to start the day positively.",
//             "how can I practice resilience in tough times?": "Resilience shines during adversity. Cultivate optimism, tap into your strengths, and remember that challenges are opportunities for growth.",
//             "What are some coping strategies for dealing with stress?": "Coping with stress is important. Try deep breathing, mindfulness, physical activity, and connecting with loved ones.",
//             "How can I improve my body image and self-confidence?": "Improving body image and self-confidence requires self-acceptance. Focus on your strengths, practice positive self-talk, and engage in activities you enjoy.",
//             "What should I do when I'm feeling overwhelmed with emotions?": "Feeling overwhelmed is common. Practice deep breathing, take breaks, and consider journaling to express your feelings.",
//             "How can I help a friend who seems to be struggling with depression?": "Supporting a friend with depression is important. Listen without judgment, encourage professional help, and offer to accompany them to appointments.",
//             "What are some strategies to improve sleep quality?": "Improving sleep quality is essential for mental health. Maintain a consistent sleep schedule, create a relaxing bedtime routine, and limit screen time before bed.",
//             "How can I manage my worries and racing thoughts?": "Managing worries and racing thoughts involves grounding techniques. Practice mindfulness, write down your thoughts, and challenge their accuracy.",
//             "What can I do to build better relationships with my loved ones?": "Building better relationships involves effective communication. Listen actively, express your feelings openly, and show empathy.",
//             "How can I handle performance anxiety before a big presentation?": "Handling performance anxiety involves preparation. Practice your presentation, engage in relaxation exercises, and remind yourself that nervousness is natural.",
//             "What are some self-care practices for promoting overall well-being?": "Self-care is essential. Engage in activities that bring joy, practice self-compassion, and prioritize rest and relaxation.",
//             "How can I manage feelings of loneliness and isolation?": "Managing loneliness involves connection. Reach out to friends, join social groups or clubs, and engage in activities you enjoy.",
//             "What should I do when I feel a sudden surge of panic or anxiety?": "Dealing with panic or anxiety attacks requires grounding. Use deep breathing, focus on your senses, and remind yourself that the feeling will pass.",
//             "How can I support a family member with a substance use disorder?": "Supporting a family member with a substance use disorder involves understanding. Encourage treatment, set boundaries, and seek family therapy if needed.",
//             "stress": "Stress is a natural response to challenges or demands. It can affect your mental and physical well-being.",
//             "manage stress": "Managing stress involves practicing relaxation techniques, exercise, and seeking support from friends and family.",
//             "anxiety": "Anxiety is a feeling of unease or worry, often about situations or events. It can manifest both physically and mentally.",
//             "cope with anxiety": "Coping with anxiety can involve deep breathing, mindfulness, and seeking professional help if needed.",
//             "how do I cope with stress?": "Managing stress is important for your mental well-being. Try practicing deep breathing, mindfulness, or engaging in physical activities you enjoy.",
//             "I'm feeling anxious": "It's okay to feel anxious. Try grounding exercises like the 5-4-3-2-1 technique. Remember to take deep breaths and consider talking to a mental health professional.",
//             "I'm sad": "I'm sorry to hear that you're feeling sad. Reach out to a friend, engage in activities you love, or consider talking to a therapist about your feelings.",
//             "I need someone to talk to": "I'm here to listen. You can also reach out to a friend, family member, or a mental health helpline. Remember, you don't have to go through this alone.",
//             "how can I improve my self-esteem?": "Building self-esteem takes time. Practice self-care, set achievable goals, and challenge negative self-talk. Celebrate your achievements, no matter how small.",
//             "how do I handle negative emotions?": "Negative emotions are normal. Identify the emotion, acknowledge it without judgment, and consider healthy ways to express or manage it.",
//             "how can I improve my body image?": "Improving body image is a journey. Focus on what your body can do, challenge unrealistic beauty ideals, and surround yourself with positive influences.",
//             "how do I manage my time better?": "Effective time management supports mental well-being. Prioritize tasks, create a schedule, and don't forget to allocate time for self-care.",
//             "how do I build healthy relationships?": "Healthy relationships are essential. Communicate openly, set boundaries, and prioritize mutual respect and understanding.",
//             "how can I engage in positive self-talk?": "Positive self-talk can boost your mood. Replace self-criticism with self-encouragement. Challenge negative thoughts with evidence.",
//             "how do I manage anger?": "Managing anger involves staying calm. Take deep breaths, remove yourself from the situation if needed, and find healthy ways to release frustration.",
//             "how can I build a support network?": "Building a support network is valuable. Connect with friends, family, support groups, and seek out like-minded individuals.",
//             "how do I handle perfectionism?": "Perfectionism can be stressful. Embrace imperfections, set realistic goals, and remind yourself that mistakes are opportunities to learn.",
//             "how do I handle triggers for anxiety?": "Anxiety triggers can be managed. Identify triggers, develop coping strategies, and consider exposure therapy with a professional.",
//             "how can I manage caregiver stress?": "Caregiving can be demanding. Take breaks, ask for help, and prioritize self-care to prevent burnout.",
//             "how do I build assertiveness skills?": "Building assertiveness takes practice. Clearly express your needs and boundaries while respecting others' rights and feelings.",
//             "how can I manage obsessive thoughts?": "Obsessive thoughts can be distressing. Practice mindfulness, consider exposure therapy, and seek support from a mental health professional.",
//             "how do I handle changes and transitions?": "Changes can be unsettling. Focus on adaptability, view challenges as opportunities for growth, and seek support when needed.",
//             "how can I practice self-forgiveness?": "Self-forgiveness is healing. Recognize mistakes as human experiences, learn from them, and practice",
//             "how do I improve my communication skills?": "Effective communication is key. Listen actively, use 'I' statements, and practice empathy to foster understanding.",
//             "how can I manage rumination?": "Rumination can worsen mood. Redirect your thoughts, engage in activities you enjoy, and practice grounding techniques.",
//             "how do I handle triggers for anxiety?": "Anxiety triggers can be managed. Identify triggers, develop coping strategies, and consider exposure therapy with a professional.",
//             "how can I practice mindfulness in daily life?": "Mindfulness is a lifestyle. Pay attention to your senses, be present during activities, and practice gratitude.",
//             "how do I cope with grief and loss?": "Grief is personal. Allow yourself to mourn, seek support from loved ones, and consider grief counseling if needed.",
//             "how can I manage test anxiety?": "Test anxiety is common. Prepare well, practice relaxation techniques before exams, and challenge negative thoughts about performance.",
//             "how do I build a morning routine for better mental health?": "A morning routine sets the tone. Include activities like exercise, meditation, or journaling to start the day positively.",
//             "how can I practice resilience in tough times?": "Resilience shines during adversity. Cultivate optimism, tap into your strengths, and remember that challenges are opportunities for growth.",
//             "What are some coping strategies for dealing with stress?": "Coping with stress is important. Try deep breathing, mindfulness, physical activity, and connecting with loved ones.",
//             "How can I improve my body image and self-confidence?": "Improving body image and self-confidence requires self-acceptance. Focus on your strengths, practice positive self-talk, and engage in activities you enjoy.",
//             "What should I do when I'm feeling overwhelmed with emotions?": "Feeling overwhelmed is common. Practice deep breathing, take breaks, and consider journaling to express your feelings.",
//             "How can I help a friend who seems to be struggling with depression?": "Supporting a friend with depression is important. Listen without judgment, encourage professional help, and offer to accompany them to appointments.",
//             "What are some strategies to improve sleep quality?": "Improving sleep quality is essential for mental health. Maintain a consistent sleep schedule, create a relaxing bedtime routine, and limit screen time before bed.",
//             "How can I manage my worries and racing thoughts?": "Managing worries and racing thoughts involves grounding techniques. Practice mindfulness, write down your thoughts, and challenge their accuracy.",
//             "What can I do to build better relationships with my loved ones?": "Building better relationships involves effective communication. Listen actively, express your feelings openly, and show empathy.",
//             "How can I handle performance anxiety before a big presentation?": "Handling performance anxiety involves preparation. Practice your presentation, engage in relaxation exercises, and remind yourself that nervousness is natural.",
//             "What are some self-care practices for promoting overall well-being?": "Self-care is essential. Engage in activities that bring joy, practice self-compassion, and prioritize rest and relaxation.",
//             "How can I manage feelings of loneliness and isolation?": "Managing loneliness involves connection. Reach out to friends, join social groups or clubs, and engage in activities you enjoy.",
//             "What should I do when I feel a sudden surge of panic or anxiety?": "Dealing with panic or anxiety attacks requires grounding. Use deep breathing, focus on your senses, and remind yourself that the feeling will pass.",
//             "How can I support a family member with a substance use disorder?": "Supporting a family member with a substance use disorder involves understanding. Encourage treatment, set boundaries, and seek family therapy if needed.",
//             "What are some strategies for managing time and reducing stress in college?": "Managing time and stress in college is important. Create a study schedule, practice time management techniques, and reach out for academic support when needed.",
//             "signs of depression": "Depression can include persistent sadness, loss of interest, changes in appetite or sleep patterns, fatigue, and feelings of worthlessness. If you're experiencing these symptoms, consider seeking help.",
//             "what is therapy?": "Therapy is a professional process where you talk to a trained therapist to address emotional, psychological, or behavioral challenges. It's a safe space to explore your feelings and develop coping strategies.",
//             "how can I manage panic attacks?": "During a panic attack, focus on your breathing, use grounding techniques, and remind yourself that the feelings will pass. Seeking professional guidance can help you manage panic attacks effectively.",
//             "how do I practice self-care?": "Self-care involves activities that prioritize your mental, emotional, and physical well-being. It can include exercise, hobbies, spending time with loved ones, and engaging in relaxation techniques.",
//             "how can I improve my relationships?": "Healthy relationships require communication, empathy, and mutual respect. Work on active listening, expressing feelings, and addressing conflicts openly to build stronger connections.",
//             "how do I set boundaries?": "Setting boundaries is essential for your mental health. Clearly communicate your limits to others and prioritize self-care. It's okay to say no when needed.",
//             "how do I cope with trauma?": "Coping with trauma can be challenging. Consider seeking support from a therapist trained in trauma treatment. Techniques like EMDR or cognitive-behavioral therapy can be helpful.",
//             "how can I manage bipolar disorder?": "Managing bipolar disorder involves medication, therapy, and lifestyle adjustments. Develop a routine, track mood changes, and work closely with your healthcare provider.",
//             "how do I help a loved one with mental illness?": "Offer support, listen without judgment, and encourage professional help. Educate yourself about their condition and be patient and understanding.",
//             "how do I handle negative self-talk?": "Challenge negative thoughts by identifying evidence that contradicts them. Practice self-compassion and use positive affirmations to cultivate a more positive inner dialogue.",
//             "how can I practice relaxation techniques?": "Relaxation techniques like progressive muscle relaxation, deep breathing, and visualization can help reduce stress. Practice regularly for the best results.",
//             "how do I manage work-related burnout?": "Prevent burnout by setting boundaries, taking breaks, and engaging in self-care activities. Communicate your needs with your employer and seek support if needed.",
//             "how can I improve my body image?": "Focus on the things you like about your body and its abilities. Challenge unrealistic beauty standards and practice self-acceptance.",
//             "how do I handle grief and loss?": "Grief is a natural response to loss. Allow yourself to feel your emotions, seek support from loved ones, and consider grief counseling if needed.",
//             "how can I support a friend with an eating disorder?": "Offer non-judgmental support and encourage professional help. Avoid discussing their appearance and focus on their well-being.",
//             "how can I improve my mental health at work?": "Prioritize self-care, take regular breaks, and communicate your needs to your employer. Engage in stress-reduction techniques like mindfulness and exercise.",
//         };

//         const greetings = ["hi", "hello", "hey", "greetings" ,"Hey there"];

//         const user_input_lower = userInput.toLowerCase();

//         if (greetings.some(greeting => user_input_lower.includes(greeting))) {
//             return "Hello! How can I assist you today?";
//         }

//         for (const question in faq) {
//             const regex = new RegExp(`\\b${question}\\b`, 'i');
//             if (regex.test(userInput)) {
//                 return faq[question];
//             }
//         }

//         return "I'm here to help with mental health questions. Feel free to ask.";
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chat-icon");
    const chatPopup = document.getElementById("chat-popup");
    const chatClose = document.getElementById("chat-close");
    const userInput = document.getElementById("user-input");
    const chatContent = document.getElementById("chat-content");
    const sendBtn = document.getElementById("send-btn");

    chatIcon.addEventListener("click", function () {
        chatPopup.style.display = "block";
        userInput.focus();
    });

    chatClose.addEventListener("click", function () {
        chatPopup.style.display = "none";
    });

    sendBtn.addEventListener("click", sendMessage);

    userInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            addUserMessage("You: " + userMessage);
            const botMessage = findAnswer(userMessage);
            setTimeout(function () {
                addBotMessage("Bot: " + botMessage);
            }, 500); // Simulate bot response delay
            userInput.value = "";
            userInput.focus();
        }
    }

    function addUserMessage(message) {
        const userMessageDiv = document.createElement("div");
        userMessageDiv.className = "chat-message";
        userMessageDiv.textContent = message;
        chatContent.appendChild(userMessageDiv);
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    function addBotMessage(message) {
        const botMessageDiv = document.createElement("div");
        botMessageDiv.className = "chat-message bot-message";
        botMessageDiv.textContent = message;
        chatContent.appendChild(botMessageDiv);
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    function findAnswer(userInput) {
        const faq = {
            "depression": "Depression is a mental health disorder characterized by persistent sadness, loss of interest, changes in sleep and appetite, fatigue, and feelings of worthlessness, often requiring professional treatment.",
            "manage stress": "Managing stress involves practicing relaxation techniques, exercise, and seeking support from friends and family.",
            "anxiety": "Anxiety is a feeling of unease or worry, often about situations or events. It can manifest both physically and mentally.",
            "cope with anxiety": "Coping with anxiety can involve deep breathing, mindfulness, and seeking professional help if needed.",
            "how do I cope with stress?": "Managing stress is important for your mental well-being. Try practicing deep breathing, mindfulness, or engaging in physical activities you enjoy.",
            "I'm feeling anxious": "It's okay to feel anxious. Try grounding exercises like the 5-4-3-2-1 technique. Remember to take deep breaths and consider talking to a mental health professional.",
            "I'm sad": "I'm sorry to hear that you're feeling sad. Reach out to a friend, engage in activities you love, or consider talking to a therapist about your feelings.",
            "I need someone to talk to": "I'm here to listen. You can also reach out to a friend, family member, or a mental health helpline. Remember, you don't have to go through this alone.",
            "how can I improve my self-esteem?": "Building self-esteem takes time. Practice self-care, set achievable goals, and challenge negative self-talk. Celebrate your achievements, no matter how small.",
            "what is mindfulness?": "Mindfulness involves being present in the moment without judgment. You can practice mindfulness through meditation, deep breathing, or simply focusing on your senses.",
            "how do I deal with social anxiety?": "Facing social anxiety can be challenging. Start small by gradually exposing yourself to social situations. Remember, it's okay to seek professional guidance for this.",
            "tips for better sleep": "Good sleep is important for mental health. Create a calming bedtime routine, limit screen time before bed, and ensure your sleep environment is comfortable and dark.",
            "how do I support a friend with depression?": "Offer a listening ear and let them know you're there for them. Encourage them to seek professional help and avoid giving unsolicited advice.",
            "what are some relaxation techniques?": "Relaxation techniques like progressive muscle relaxation and guided imagery can help reduce stress. Find what works best for you.",
            "how do I set boundaries for my mental health?": "Setting boundaries is crucial. Communicate your limits to others, prioritize self-care, and don't feel guilty about saying no.",
            "signs of a panic attack": "Panic attacks can cause rapid heartbeat, shortness of breath, sweating, and a sense of impending doom. Remember to breathe deeply and seek help if needed.",
            "I'm feeling overwhelmed": "Feeling overwhelmed is common. Break tasks into smaller steps, ask for support, and practice self-compassion.",
            "how do I build resilience?": "Resilience comes from facing challenges. Cultivate a strong support network, practice gratitude, and develop problem-solving skills.",
            "how do I practice gratitude?": "Gratitude can improve your well-being. Start a gratitude journal, take a moment each day to reflect on positives, and express appreciation to others.",
            "I'm struggling with low motivation": "Low motivation happens to everyone. Set achievable goals, celebrate small wins, and establish a routine to help improve motivation.",
            "how can I help someone with suicidal thoughts?": "Take them seriously and encourage them to talk to a mental health professional. Remove any means of self-harm and stay with them if possible.",
            "how do I handle setbacks in recovery?": "Setbacks are part of recovery. Be kind to yourself, reach out for support, and remember that progress is not always linear.",
            "tips for better sleep": "Prioritize a consistent sleep schedule, create a calming bedtime routine, and limit caffeine and screen time before bed.",
            "how do I practice mindfulness?": "Mindfulness involves being present in the moment. Start with mindful breathing, body scans, or mindful walking.",
            "how can I manage social isolation?": "Social isolation can be tough. Stay connected virtually, join online communities, and consider volunteering or joining virtual events.",
            "how do I find a therapist?": "Finding the right therapist is important. Consider your preferences, insurance coverage, and the therapist's expertise. Reach out to professional organizations for recommendations.",
            "how do I practice self-compassion?": "Self-compassion is important. Treat yourself with the same kindness you'd offer a friend. Challenge self-criticism and practice self-kindness.",
            "how do I manage work-related stress?": "Balancing work and well-being is crucial. Prioritize tasks, take breaks, and communicate boundaries with colleagues.",
            "how do I cope with loneliness?": "Loneliness can be challenging. Reach out to friends, engage in social activities, and consider joining clubs or groups with shared interests.",
            "how can I boost my self-esteem?": "Boosting self-esteem takes time. Focus on your strengths, practice positive self-talk, and engage in activities that make you feel accomplished.",
            "how do I handle negative emotions?": "Negative emotions are normal. Identify the emotion, acknowledge it without judgment, and consider healthy ways to express or manage it.",
            "how can I improve my body image?": "Improving body image is a journey. Focus on what your body can do, challenge unrealistic beauty ideals, and surround yourself with positive influences.",
            "how do I manage my time better?": "Effective time management supports mental well-being. Prioritize tasks, create a schedule, and don't forget to allocate time for self-care.",
            "how do I build healthy relationships?": "Healthy relationships are essential. Communicate openly, set boundaries, and prioritize mutual respect and understanding.",
            "how do I practice acceptance?": "Practicing acceptance can reduce suffering. Recognize that some things are beyond your control. Focus on your responses and choices.",
            "how can I engage in positive self-talk?": "Positive self-talk can boost your mood. Replace self-criticism with self-encouragement. Challenge negative thoughts with evidence.",
            "how do I manage anger?": "Managing anger involves staying calm. Take deep breaths, remove yourself from the situation if needed, and find healthy ways to release frustration.",
            "how can I build a support network?": "Building a support network is valuable. Connect with friends, family, support groups, and seek out like-minded individuals.",
            "how do I handle perfectionism?": "Perfectionism can be stressful. Embrace imperfections, set realistic goals, and remind yourself that mistakes are opportunities to learn.",
            "how do I practice relaxation techniques?": "Relaxation techniques like progressive muscle relaxation, deep breathing, and visualization can help reduce stress. Practice regularly.",
            "how can I cultivate a positive mindset?": "Cultivating a positive mindset takes practice. Focus on gratitude, challenge negative thoughts, and engage in activities that bring joy.",
            "how do I handle uncertainty?": "Uncertainty is a challenge. Focus on what you can control, practice mindfulness, and remind yourself that uncertainty is a natural part of life.",
            "how can I manage caregiver stress?": "Caregiving can be demanding. Take breaks, ask for help, and prioritize self-care to prevent burnout.",
            "how do I build assertiveness skills?": "Building assertiveness takes practice. Clearly express your needs and boundaries while respecting others' rights and feelings.",
            "how can I manage obsessive thoughts?": "Obsessive thoughts can be distressing. Practice mindfulness, consider exposure therapy, and seek support from a mental health professional.",
            "how do I handle changes and transitions?": "Changes can be unsettling. Focus on adaptability, view challenges as opportunities for growth, and seek support when needed.",
            "how can I practice self-forgiveness?": "Self-forgiveness is healing. Recognize mistakes as human experiences, learn from them, and practice self-compassion.",
            "how do I improve my communication skills?": "Effective communication is key. Listen actively, use 'I' statements, and practice empathy to foster understanding.",
            "how can I manage rumination?": "Rumination can worsen mood. Redirect your thoughts, engage in activities you enjoy, and practice grounding techniques.",
            "how do I handle triggers for anxiety?": "Anxiety triggers can be managed. Identify triggers, develop coping strategies, and consider exposure therapy with a professional.",
            "how can I practice mindfulness in daily life?": "Mindfulness is a lifestyle. Pay attention to your senses, be present during activities, and practice gratitude.",
            " how do I cope with grief and loss?": "Grief is personal. Allow yourself to mourn, seek support from loved ones, and consider grief counseling if needed.",
            "how can I manage test anxiety?": "Test anxiety is common. Prepare well, practice relaxation techniques before exams, and challenge negative thoughts about performance.",
            "how do I build a morning routine for better mental health?": "A morning routine sets the tone. Include activities like exercise, meditation, or journaling to start the day positively.",
            "how can I practice resilience in tough times?": "Resilience shines during adversity. Cultivate optimism, tap into your strengths, and remember that challenges are opportunities for growth.",
            "What are some coping strategies for dealing with stress?": "Coping with stress is important. Try deep breathing, mindfulness, physical activity, and connecting with loved ones.",
            "How can I improve my body image and self-confidence?": "Improving body image and self-confidence requires self-acceptance. Focus on your strengths, practice positive self-talk, and engage in activities you enjoy.",
            "What should I do when I'm feeling overwhelmed with emotions?": "Feeling overwhelmed is common. Practice deep breathing, take breaks, and consider journaling to express your feelings.",
            "How can I help a friend who seems to be struggling with depression?": "Supporting a friend with depression is important. Listen without judgment, encourage professional help, and offer to accompany them to appointments.",
            "What are some strategies to improve sleep quality?": "Improving sleep quality is essential for mental health. Maintain a consistent sleep schedule, create a relaxing bedtime routine, and limit screen time before bed.",
            "How can I manage my worries and racing thoughts?": "Managing worries and racing thoughts involves grounding techniques. Practice mindfulness, write down your thoughts, and challenge their accuracy.",
            "What can I do to build better relationships with my loved ones?": "Building better relationships involves effective communication. Listen actively, express your feelings openly, and show empathy.",
            "How can I handle performance anxiety before a big presentation?": "Handling performance anxiety involves preparation. Practice your presentation, engage in relaxation exercises, and remind yourself that nervousness is natural.",
            "What are some self-care practices for promoting overall well-being?": "Self-care is essential. Engage in activities that bring joy, practice self-compassion, and prioritize rest and relaxation.",
            "How can I manage feelings of loneliness and isolation?": "Managing loneliness involves connection. Reach out to friends, join social groups or clubs, and engage in activities you enjoy.",
            "What should I do when I feel a sudden surge of panic or anxiety?": "Dealing with panic or anxiety attacks requires grounding. Use deep breathing, focus on your senses, and remind yourself that the feeling will pass.",
            "How can I support a family member with a substance use disorder?": "Supporting a family member with a substance use disorder involves understanding. Encourage treatment, set boundaries, and seek family therapy if needed.",
            "stress": "Stress is a natural response to challenges or demands. It can affect your mental and physical well-being.",
            "manage stress": "Managing stress involves practicing relaxation techniques, exercise, and seeking support from friends and family.",
            "anxiety": "Anxiety is a feeling of unease or worry, often about situations or events. It can manifest both physically and mentally.",
            "cope with anxiety": "Coping with anxiety can involve deep breathing, mindfulness, and seeking professional help if needed.",
            "how do I cope with stress?": "Managing stress is important for your mental well-being. Try practicing deep breathing, mindfulness, or engaging in physical activities you enjoy.",
            "I'm feeling anxious": "It's okay to feel anxious. Try grounding exercises like the 5-4-3-2-1 technique. Remember to take deep breaths and consider talking to a mental health professional.",
            "I'm sad": "I'm sorry to hear that you're feeling sad. Reach out to a friend, engage in activities you love, or consider talking to a therapist about your feelings.",
            "I need someone to talk to": "I'm here to listen. You can also reach out to a friend, family member, or a mental health helpline. Remember, you don't have to go through this alone.",
            "how can I improve my self-esteem?": "Building self-esteem takes time. Practice self-care, set achievable goals, and challenge negative self-talk. Celebrate your achievements, no matter how small.",
            "how do I handle negative emotions?": "Negative emotions are normal. Identify the emotion, acknowledge it without judgment, and consider healthy ways to express or manage it.",
            "how can I improve my body image?": "Improving body image is a journey. Focus on what your body can do, challenge unrealistic beauty ideals, and surround yourself with positive influences.",
            "how do I manage my time better?": "Effective time management supports mental well-being. Prioritize tasks, create a schedule, and don't forget to allocate time for self-care.",
            "how do I build healthy relationships?": "Healthy relationships are essential. Communicate openly, set boundaries, and prioritize mutual respect and understanding.",
            "how can I engage in positive self-talk?": "Positive self-talk can boost your mood. Replace self-criticism with self-encouragement. Challenge negative thoughts with evidence.",
            "how do I manage anger?": "Managing anger involves staying calm. Take deep breaths, remove yourself from the situation if needed, and find healthy ways to release frustration.",
            "how can I build a support network?": "Building a support network is valuable. Connect with friends, family, support groups, and seek out like-minded individuals.",
            "how do I handle perfectionism?": "Perfectionism can be stressful. Embrace imperfections, set realistic goals, and remind yourself that mistakes are opportunities to learn.",
            "how do I handle triggers for anxiety?": "Anxiety triggers can be managed. Identify triggers, develop coping strategies, and consider exposure therapy with a professional.",
            "how can I manage caregiver stress?": "Caregiving can be demanding. Take breaks, ask for help, and prioritize self-care to prevent burnout.",
            "how do I build assertiveness skills?": "Building assertiveness takes practice. Clearly express your needs and boundaries while respecting others' rights and feelings.",
            "how can I manage obsessive thoughts?": "Obsessive thoughts can be distressing. Practice mindfulness, consider exposure therapy, and seek support from a mental health professional.",
            "how do I handle changes and transitions?": "Changes can be unsettling. Focus on adaptability, view challenges as opportunities for growth, and seek support when needed.",
            "how can I practice self-forgiveness?": "Self-forgiveness is healing. Recognize mistakes as human experiences, learn from them, and practice",
            "how do I improve my communication skills?": "Effective communication is key. Listen actively, use 'I' statements, and practice empathy to foster understanding.",
            "how can I manage rumination?": "Rumination can worsen mood. Redirect your thoughts, engage in activities you enjoy, and practice grounding techniques.",
            "how do I handle triggers for anxiety?": "Anxiety triggers can be managed. Identify triggers, develop coping strategies, and consider exposure therapy with a professional.",
            "how can I practice mindfulness in daily life?": "Mindfulness is a lifestyle. Pay attention to your senses, be present during activities, and practice gratitude.",
            "how do I cope with grief and loss?": "Grief is personal. Allow yourself to mourn, seek support from loved ones, and consider grief counseling if needed.",
            "how can I manage test anxiety?": "Test anxiety is common. Prepare well, practice relaxation techniques before exams, and challenge negative thoughts about performance.",
            "how do I build a morning routine for better mental health?": "A morning routine sets the tone. Include activities like exercise, meditation, or journaling to start the day positively.",
            "how can I practice resilience in tough times?": "Resilience shines during adversity. Cultivate optimism, tap into your strengths, and remember that challenges are opportunities for growth.",
            "What are some coping strategies for dealing with stress?": "Coping with stress is important. Try deep breathing, mindfulness, physical activity, and connecting with loved ones.",
            "How can I improve my body image and self-confidence?": "Improving body image and self-confidence requires self-acceptance. Focus on your strengths, practice positive self-talk, and engage in activities you enjoy.",
            "What should I do when I'm feeling overwhelmed with emotions?": "Feeling overwhelmed is common. Practice deep breathing, take breaks, and consider journaling to express your feelings.",
            "How can I help a friend who seems to be struggling with depression?": "Supporting a friend with depression is important. Listen without judgment, encourage professional help, and offer to accompany them to appointments.",
            "What are some strategies to improve sleep quality?": "Improving sleep quality is essential for mental health. Maintain a consistent sleep schedule, create a relaxing bedtime routine, and limit screen time before bed.",
            "How can I manage my worries and racing thoughts?": "Managing worries and racing thoughts involves grounding techniques. Practice mindfulness, write down your thoughts, and challenge their accuracy.",
            "What can I do to build better relationships with my loved ones?": "Building better relationships involves effective communication. Listen actively, express your feelings openly, and show empathy.",
            "How can I handle performance anxiety before a big presentation?": "Handling performance anxiety involves preparation. Practice your presentation, engage in relaxation exercises, and remind yourself that nervousness is natural.",
            "What are some self-care practices for promoting overall well-being?": "Self-care is essential. Engage in activities that bring joy, practice self-compassion, and prioritize rest and relaxation.",
            "How can I manage feelings of loneliness and isolation?": "Managing loneliness involves connection. Reach out to friends, join social groups or clubs, and engage in activities you enjoy.",
            "What should I do when I feel a sudden surge of panic or anxiety?": "Dealing with panic or anxiety attacks requires grounding. Use deep breathing, focus on your senses, and remind yourself that the feeling will pass.",
            "How can I support a family member with a substance use disorder?": "Supporting a family member with a substance use disorder involves understanding. Encourage treatment, set boundaries, and seek family therapy if needed.",
            "What are some strategies for managing time and reducing stress in college?": "Managing time and stress in college is important. Create a study schedule, practice time management techniques, and reach out for academic support when needed.",
            "signs of depression": "Depression can include persistent sadness, loss of interest, changes in appetite or sleep patterns, fatigue, and feelings of worthlessness. If you're experiencing these symptoms, consider seeking help.",
            "what is therapy?": "Therapy is a professional process where you talk to a trained therapist to address emotional, psychological, or behavioral challenges. It's a safe space to explore your feelings and develop coping strategies.",
            "how can I manage panic attacks?": "During a panic attack, focus on your breathing, use grounding techniques, and remind yourself that the feelings will pass. Seeking professional guidance can help you manage panic attacks effectively.",
            "how do I practice self-care?": "Self-care involves activities that prioritize your mental, emotional, and physical well-being. It can include exercise, hobbies, spending time with loved ones, and engaging in relaxation techniques.",
            "how can I improve my relationships?": "Healthy relationships require communication, empathy, and mutual respect. Work on active listening, expressing feelings, and addressing conflicts openly to build stronger connections.",
            "how do I set boundaries?": "Setting boundaries is essential for your mental health. Clearly communicate your limits to others and prioritize self-care. It's okay to say no when needed.",
            "how do I cope with trauma?": "Coping with trauma can be challenging. Consider seeking support from a therapist trained in trauma treatment. Techniques like EMDR or cognitive-behavioral therapy can be helpful.",
            "how can I manage bipolar disorder?": "Managing bipolar disorder involves medication, therapy, and lifestyle adjustments. Develop a routine, track mood changes, and work closely with your healthcare provider.",
            "how do I help a loved one with mental illness?": "Offer support, listen without judgment, and encourage professional help. Educate yourself about their condition and be patient and understanding.",
            "how do I handle negative self-talk?": "Challenge negative thoughts by identifying evidence that contradicts them. Practice self-compassion and use positive affirmations to cultivate a more positive inner dialogue.",
            "how can I practice relaxation techniques?": "Relaxation techniques like progressive muscle relaxation, deep breathing, and visualization can help reduce stress. Practice regularly for the best results.",
            "how do I manage work-related burnout?": "Prevent burnout by setting boundaries, taking breaks, and engaging in self-care activities. Communicate your needs with your employer and seek support if needed.",
            "how can I improve my body image?": "Focus on the things you like about your body and its abilities. Challenge unrealistic beauty standards and practice self-acceptance.",
            "how do I handle grief and loss?": "Grief is a natural response to loss. Allow yourself to feel your emotions, seek support from loved ones, and consider grief counseling if needed.",
            "how can I support a friend with an eating disorder?": "Offer non-judgmental support and encourage professional help. Avoid discussing their appearance and focus on their well-being.",
            "how can I improve my mental health at work?": "Prioritize self-care, take regular breaks, and communicate your needs to your employer. Engage in stress-reduction techniques like mindfulness and exercise.",
        };

        const greetings = ["hi", "hello", "hey", "greetings"];

        const user_input_lower = userInput.toLowerCase();

        if (greetings.some(greeting => user_input_lower.includes(greeting))) {
            return "Hello! How can I assist you today?";
        }

        for (const question in faq) {
            const regex = new RegExp(`\\b${question}\\b`, 'i');
            if (regex.test(userInput)) {
                return faq[question];
            }
        }

        return "I'm here to help with mental health questions. Feel free to ask.";
    }
});
