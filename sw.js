// 1. OneSignal ki asli power sabse upar (Don't remove this)
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

// 2. Tumhara purana Firebase system (Waisa hi rakha hai)
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDw439IXSmTpustCkIQpRQ7foZ-hc8XiDQ",
    projectId: "workhatapp",
    messagingSenderId: "971559169599",
    appId: "1:971559169599:web:082be923ea9782440e128a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((p) => {
    self.registration.showNotification(p.data.title || "Mirae Support", {
        body: p.data.body || "New update received",
        icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        vibrate: [500, 100, 500],
        requireInteraction: true
    });
});
