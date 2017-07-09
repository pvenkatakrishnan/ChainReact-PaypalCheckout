export default [
    {  
        "header": "Checkout in Mobile: Current Status", 
        "bodyImg": require('./image/checkout.png')
    },
    { 
        "header": "Why react-native ?", 
        "body": [
            "Write most of the code once, and share between Android and iOS",
            "Easy on-boarding with react like syntax and similar concepts and minimal mobile experience",
            "Ability to test variety of experiences with remotely hosted bundles"
        ]
    },
    {    
        "header": "Breaking down the SDK setup", 
        "bodyImg": require('./image/breakdown.jpeg')
    },
    {
        "header": "Seeing it in action ...", 
        "bodyVideo": 'o8WV-mLZt2U',
        
    },

    { 
        "header": "Dynamic Updates", 
        "body": [
            "SDK bundled with an initial stable bundle",
            "Incremental React-Native bundles are hosted on paypalobjects (akamai) ",
            "A meta file which contains a SHA1 encryption of the bundle (20 bytes) is hosted on paypal objects"
        ]
    },

    {  
        "header": "Quick Look into \"how\"...", 
        "bodyImg": require('./image/caching.png')
    },

    {  
        "header": "In the near future ... ", 
        "bodyVideo": '2D3orpzdOPA',
        "footer": 'Actual experience may vary. This is just experimental'
    },
    {
        "header": "Another Variation...",
        "bodyVideo": 'YyrTVdA75N0',
        "footer": 'Actual experience may vary. This is just experimental'
    },
    { 
        "header": "Challenges", 
        "body": [
            "Size of the react-native module included in the SDK (for native modules)", 
            "Keeping up with react-native releases :)", 
            "Potential collisions of react-native versions between App and SDK",
            "Android: ways to stash away react-native dependency into the SDK"
        ]
    },
    {
        "header": "For this presentation....", 
        "body": [
            "react-native-looped-carousel", 
            "react-native-youtube"
        ]
    } ,  
    {
        "header": "THANK YOU!", 
         "body": [
            "iOS SDK : https://github.com/paypal/paypalcheckout-ios", 
            "android SDK : https://github.com/paypal/paypalcheckout-android",
            "Documentation : https://github.com/paypal/paypalnativecheckout-docs"
        ]
    }   
]