let currentTab = null;
let startTime = Date.now();

// 🔥 Runs every second (real-time tracking)
setInterval(async () => {
    try {
        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
        });

        if (!tab || !tab.url || tab.url.startsWith("chrome://")) return;

        const now = Date.now();
        const hostname = new URL(tab.url).hostname;

        // First time setup
        if (!currentTab) {
            currentTab = hostname;
            startTime = now;
            return;
        }

        const timeSpent = now - startTime;

        chrome.storage.local.get(["timeData"], (res) => {
            const data = res.timeData || {};

            data[currentTab] = (data[currentTab] || 0) + timeSpent;

            chrome.storage.local.set({ timeData: data });
        });

        // Update current tab + time
        currentTab = hostname;
        startTime = now;

    } catch (err) {
        console.log("Tracking error:", err);
    }
}, 5000);