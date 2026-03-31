importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDw439IXSmTpustCkIQpRQ7foZ-hc8XiDQ",
    projectId: "workhatapp",
    messagingSenderId: "971559169599",
    appId: "1:971559169599:web:082be923ea9782440e128a"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    const options = {
        body: payload.data.body || "Aapko ek call/message aaya hai.",
        icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        vibrate: [500, 100, 500, 100, 500],
        requireInteraction: true, // Notification bar mein chipka rahega jab tak user na hataye
        tag: 'mirae-call-alert'
    };
    self.registration.showNotification(payload.data.title || "Mirae Support", options);
});
