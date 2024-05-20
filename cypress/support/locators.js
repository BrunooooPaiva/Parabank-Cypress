const locators = {

    LOGIN: {
        XP_USERNAME: "//input[@class='input' and @name='username']",
        XP_PASSWORD: "//input[@class='input' and @name='password']",
        XP_BTN_LOG_IN: "//input[@class='button' and @value='Log In']",
        XP_BTN_REGISTER: "//a[contains(text(), 'Register')]",
        XP_ERROR: "//p[@class='error']"
    },

    REGISTER: {
        XP_FIRST_NAME: "//input[@id='customer.firstName']",
        XP_LAST_NAME: "//input[@id='customer.lastName']",
        XP_ADRESS: "//input[@id='customer.address.street']",
        XP_CITY: "//input[@id='customer.address.city']",
        XP_STATE: "//input[@id='customer.address.state']",
        XP_ZIP_CODE: "//input[@id='customer.address.zipCode']",
        XP_PHONE_NUMBER: "//input[@id='customer.phoneNumber']",
        XP_SSN: "//input[@id='customer.ssn']",
        XP_USERNAME: "//input[@id='customer.username']",
        XP_PASSWORD: "//input[@id='customer.password']",
        XP_PASSWORD_CONFIRM: "//input[@id='repeatedPassword']",

        XP_BTN_REGISTER: "//input[@class='button' and @value='Register']",

        XP_ERROR: "//span[@class='error']",
    },

    SERVICES: {
        XP_NEW_ACCOUNT: "//a[@href='openaccount.htm']",
        XP_OVERVIEW: "//a[@href='overview.htm']",
        XP_TRANSFER_FUNDS: "//a[@href='transfer.htm']",
        XP_BILL_PAY: "//a[@href='billpay.htm']",
        XP_FTRANSACTIONS: "//a[@href='findtrans.htm']",
        XP_UPDTADE_PROFILE: "//a[@href='updateprofile.htm']",
        XP_REQUEST_LOAN: "//a[@href='requestloan.htm']",
        XP_LOGOUT: "//a[@href='logout.htm']"
    },

    NEW_ACCOUNT: {
        XP_TYPE_ACCOUNT: "//select[@id='type']",
        XP_ACCOUNT_TRANSFER: "//select[@id='fromAccountId']",
        XP_ACCOUNT_ALTERNATIVE: "//select[@id='fromAccountId']//option[1]",
        XP_BTN_OPEN_NEW_ACCOUNT: "//input[@class='button' and @value='Open New Account']"
    },

    OVERVIEW: {
        FN_XP_ID_ACCOUNT: number => `//a[@href='activity.htm?id=${number}']`,
        XP_ACCOUNT: "//tr[1]//td[1]//a[1]",
        XP_ACTIVITY_PERIOD: "//select[@id='month']",
        XP_TYPE: "//select[@id='transactionType']",
        XP_BTN_GO: "//input[@class='button' and @value='Go']",
        XP_NO_TRANSACTIONS: "//p[@id='noTransactions']",
        XP_TRANSACTIONS: "//tr//td//a[contains(text(), 'Funds Transfer Sent')]"
    },

    TRANSFER_FUNDS: {
        XP_AMOUNT: "//input[@id='amount']",
        XP_FROM_ACCOUNT: "//select[@id='fromAccountId']",
        XP_TO_ACCOUNT: "//select[@id='toAccountId']",
        XP_BTN_TRANSFER: "//input[@class='button' and @value='Transfer']"
    },

    BILL: {
        XP_PAYEE_NAME: "//input[@name='payee.name']",
        XP_ADRESS: "//input[@name='payee.address.street']",
        XP_CITY: "//input[@name='payee.address.city']",
        XP_STATE: "//input[@name='payee.address.state']",
        XP_ZIP_CODE: "//input[@name='payee.address.zipCode']",
        XP_PHONE_NUMBER: "//input[@name='payee.phoneNumber']",
        XP_ACCOUNT: "//input[@name='payee.accountNumber']",
        XP_VERIFY_ACCOUNT: "//input[@name='verifyAccount']",
        XP_AMOUNT: "//input[@name='amount']",
        XP_SELECT_FACCOUNT: "//select[@name='fromAccountId']",
        XP_FIX: "//select[@name='fromAccountId']//option[1]",
        XP_BTN_SEND_PAYMENT: "//input[@class='button' and @value='Send Payment']"
    },
    
    ADMIN: {
        XP_ADMIN_PAGE: "//a[@href='admin.htm' and contains(text(), 'Admin Page')]",
        XP_BTN_CLEAN_DATABASE: "//button[@class='button' and @value='CLEAN']"
    },

    XP_TITLE: "//h1[@class='title']",
}

export default locators