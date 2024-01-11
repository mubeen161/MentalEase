<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Thought Journal</title>
</head>
<body>
    <header>
        <h1>Thought Journal</h1>
    </header>
    <main>
        <div>
            <li><a href="#yoga" class="menu-btn">YOGA</a></li>
        </div>
        <div class="entry-form">
            <h2>New Entry</h2>
            <form>
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required>
                
                <label for="emotion">Emotion:</label>
                <select id="emotion" name="emotion" required>
                    <option value="" disabled selected>Select an emotion</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="angry">Angry</option>
                    <!-- Add more emotions as needed -->
                </select>
                
                <label for="entry">Your Entry:</label>
                <textarea id="entry" name="entry" rows="5" required></textarea>
                
                <button type="submit">Save Entry</button>
            </form>
        </div>
        <div class="yoga" id="yoga">
            <section class="intro-section" style="background-image: url('yogaa.jpg');">
                <div class="intro-content">
                    <h2>Discover Inner Peace</h2>
                    <p>Embark on a journey of self-discovery and tranquility through the art of yoga.</p>
                    <a href="#hatha-yoga" class="explore-button">Explore Yoga Types</a>
                </div>
            </section>
        
            <section id="hatha-yoga" class="yoga-type hatha-yoga">
                <div class="yoga-info">
                    <h2>Hatha Yoga</h2>
                    <p>This foundational practice includes a combination of physical postures (asanas) and breathing techniques (pranayama) that can help reduce stress, promote relaxation, and improve mental focus.</p>
                </div>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/uH2N2gmjhl0" frameborder="0" allowfullscreen></iframe>
                </div>
            </section>
        
            <section id="vinyasa-yoga" class="yoga-type vinyasa-yoga">
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/VzY6XuOSoHw" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="yoga-info">
                    <h2>Vinyasa Yoga</h2>
                    <p>The rhythmic flow of movement and breath in vinyasa yoga can help create a meditative state, promoting mindfulness and reducing anxiety.</p>
                </div>
            </section>
        
            <section id="mindfulness-yoga" class="yoga-type mindfulness-yoga">
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/VzY6XuOSoHw" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="yoga-info">
                    <h2>Mindfulness Yoga</h2>
                    <p>This approach combines yoga with mindfulness meditation techniques, focusing on the present moment and reducing rumination and stress.</p>
                </div>
            </section>
            
            <section id="pranayama" class="yoga-type pranayama">
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/VzY6XuOSoHw" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="yoga-info">
                    <h2>Pranayama</h2>
                    <p>While not a style of yoga itself, pranayama (breath control) is often incorporated into various yoga practices. Breathing exercises like alternate nostril breathing (Nadi Shodhana) and deep diaphragmatic breathing (Ujjayi) can have a calming effect on the nervous system and reduce anxiety.</p>
                </div>
            </section>
            
            <section id="meditation-yoga" class="yoga-type meditation-yoga">
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/VzY6XuOSoHw" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="yoga-info">
                    <h2>Meditation Yoga</h2>
                    <p>Some yoga practices are centered around meditation, promoting mental clarity, stress reduction, and overall emotional well-being. Examples include Raja Yoga and Jnana Yoga.</p>
                </div>
            </section>
            
            <section id="yoga-nidra" class="yoga-type yoga-nidra">
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/VzY6XuOSoHw" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="yoga-info">
                    <h2>Yoga Nidra</h2>
                    <p>Also known as yogic sleep, yoga nidra is a guided meditation that induces deep relaxation and can help alleviate stress, anxiety, and insomnia.</p>
                </div>
            </section>
            
            <section id="gentle-therapeutic-yoga" class="yoga-type gentle-therapeutic-yoga">
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/VzY6XuOSoHw" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="yoga-info">
                    <h2>Gentle and Therapeutic Yoga</h2>
                    <p>These styles are adapted to individuals with physical limitations or those recovering from injuries. They often include gentle movements, breath awareness, and relaxation techniques that can be beneficial for mental well-being.</p>
                </div>
            </section>
            
            <section class="conclusion-section">
                <div class="conclusion-content">
                    <h2>Unlock the Benefits</h2>
                    <p>It's important to note that the benefits of yoga for mental health can vary from person to person. Regular practice, along with an open and mindful approach, can contribute to improved mental well-being over time. If you're dealing with specific mental health concerns, it's recommended to consult with a healthcare professional or mental health expert before starting any new yoga practice.</p>
                </div>
            </section>
        </div>
    </main>
    <footer>
        <p>&copy; 2023 Thought Journal</p>
    </footer>
    
</body>
</html>
<!-- ... previous HTML content ... -->
<script src="script.js"></script>
<!-- </body>
</html> -->
