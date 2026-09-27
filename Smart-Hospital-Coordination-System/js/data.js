/* =====================================================
   SMART HOSPITAL COORDINATION SYSTEM
   DEMO DATA
   ===================================================== */


/* =====================================================
   1. PATIENT DATA
===================================================== */
(function (){
const patients = [

    {
        id: "P1001",
        name: "Rahul Patil",
        age: 45,
        gender: "Male",
        contact: "9876543210",
        emergency: true,
        priority: "Critical",
        department: "Emergency",
        doctor: "Dr. Amit Sharma",
        treatment: "Emergency cardiac monitoring",
        medicines: "Aspirin, Oxygen support",
        pendingTests: ["CBC", "ECG"],
        status: "Active"
    },

    {
        id: "P1002",
        name: "Priya Sharma",
        age: 32,
        gender: "Female",
        contact: "9876543211",
        emergency: true,
        priority: "High",
        department: "Emergency",
        doctor: "Dr. Neha Joshi",
        treatment: "Observation and medication",
        medicines: "IV Fluids",
        pendingTests: ["Blood Test"],
        status: "Active"
    },

    {
        id: "P1003",
        name: "Amit Deshmukh",
        age: 58,
        gender: "Male",
        contact: "9876543212",
        emergency: true,
        priority: "Medium",
        department: "General Ward",
        doctor: "Dr. Raj Mehta",
        treatment: "Post-operative care",
        medicines: "Antibiotics",
        pendingTests: [],
        status: "Active"
    },

    {
        id: "P1004",
        name: "Sneha Kulkarni",
        age: 27,
        gender: "Female",
        contact: "9876543213",
        emergency: false,
        priority: "Low",
        department: "General Ward",
        doctor: "Dr. Pooja Shah",
        treatment: "Routine observation",
        medicines: "Pain relief medication",
        pendingTests: [],
        status: "Active"
    },

    {
        id: "P1005",
        name: "Vikram Singh",
        age: 65,
        gender: "Male",
        contact: "9876543214",
        emergency: true,
        priority: "Critical",
        department: "ICU",
        doctor: "Dr. Amit Sharma",
        treatment: "Critical care monitoring",
        medicines: "IV medication",
        pendingTests: ["CT Scan"],
        status: "Critical"
    },

    {
        id: "P1006",
        name: "Anjali Verma",
        age: 39,
        gender: "Female",
        contact: "9876543215",
        emergency: false,
        priority: "Low",
        department: "General Ward",
        doctor: "Dr. Neha Joshi",
        treatment: "Recovery monitoring",
        medicines: "Prescribed medication",
        pendingTests: [],
        status: "Active"
    },

    {
        id: "P1007",
        name: "Rohan Joshi",
        age: 51,
        gender: "Male",
        contact: "9876543216",
        emergency: true,
        priority: "High",
        department: "Emergency",
        doctor: "Dr. Raj Mehta",
        treatment: "Emergency observation",
        medicines: "IV Fluids",
        pendingTests: ["X-Ray"],
        status: "Active"
    },

    {
        id: "P1008",
        name: "Meena Rao",
        age: 42,
        gender: "Female",
        contact: "9876543217",
        emergency: false,
        priority: "Low",
        department: "General Ward",
        doctor: "Dr. Pooja Shah",
        treatment: "Routine treatment",
        medicines: "Regular medication",
        pendingTests: [],
        status: "Active"
    }

];


/* =====================================================
   2. BED DATA
===================================================== */

const beds = [

    {
        id: "E-101",
        department: "Emergency",
        status: "Occupied",
        patientId: "P1001"
    },

    {
        id: "E-102",
        department: "Emergency",
        status: "Available",
        patientId: ""
    },

    {
        id: "E-103",
        department: "Emergency",
        status: "Occupied",
        patientId: "P1002"
    },

    {
        id: "E-104",
        department: "Emergency",
        status: "Available",
        patientId: ""
    },

    {
        id: "I-201",
        department: "ICU",
        status: "Occupied",
        patientId: "P1005"
    },

    {
        id: "I-202",
        department: "ICU",
        status: "Available",
        patientId: ""
    },

    {
        id: "I-203",
        department: "ICU",
        status: "Available",
        patientId: ""
    },

    {
        id: "I-204",
        department: "ICU",
        status: "Occupied",
        patientId: "P1007"
    },

    {
        id: "G-301",
        department: "General Ward",
        status: "Occupied",
        patientId: "P1003"
    },

    {
        id: "G-302",
        department: "General Ward",
        status: "Occupied",
        patientId: "P1004"
    },

    {
        id: "G-303",
        department: "General Ward",
        status: "Available",
        patientId: ""
    },

    {
        id: "G-304",
        department: "General Ward",
        status: "Available",
        patientId: ""
    },

    {
        id: "G-305",
        department: "General Ward",
        status: "Occupied",
        patientId: "P1006"
    },

    {
        id: "G-306",
        department: "General Ward",
        status: "Available",
        patientId: ""
    },

    {
        id: "G-307",
        department: "General Ward",
        status: "Available",
        patientId: ""
    }

];


/* =====================================================
   3. BLOOD DATA
===================================================== */

const blood = [

    {
        group: "A+",
        units: 12
    },

    {
        group: "A-",
        units: 5
    },

    {
        group: "B+",
        units: 10
    },

    {
        group: "B-",
        units: 3
    },

    {
        group: "AB+",
        units: 7
    },

    {
        group: "AB-",
        units: 2
    },

    {
        group: "O+",
        units: 15
    },

    {
        group: "O-",
        units: 4
    }

];


/* =====================================================
   4. PENDING TEST DATA
===================================================== */

const tests = [

    {
        id: "T1001",
        patientId: "P1001",
        patientName: "Rahul Patil",
        testName: "CBC",
        department: "Emergency",
        requestedBy: "Dr. Amit Sharma",
        date: "27-09-2026",
        status: "Pending"
    },

    {
        id: "T1002",
        patientId: "P1001",
        patientName: "Rahul Patil",
        testName: "ECG",
        department: "Emergency",
        requestedBy: "Dr. Amit Sharma",
        date: "27-09-2026",
        status: "In Progress"
    },

    {
        id: "T1003",
        patientId: "P1002",
        patientName: "Priya Sharma",
        testName: "Blood Test",
        department: "Emergency",
        requestedBy: "Dr. Neha Joshi",
        date: "27-09-2026",
        status: "Pending"
    },

    {
        id: "T1004",
        patientId: "P1005",
        patientName: "Vikram Singh",
        testName: "CT Scan",
        department: "ICU",
        requestedBy: "Dr. Amit Sharma",
        date: "27-09-2026",
        status: "Pending"
    },

    {
        id: "T1005",
        patientId: "P1007",
        patientName: "Rohan Joshi",
        testName: "X-Ray",
        department: "Emergency",
        requestedBy: "Dr. Raj Mehta",
        date: "27-09-2026",
        status: "Pending"
    },

    {
        id: "T1006",
        patientId: "P1003",
        patientName: "Amit Deshmukh",
        testName: "Blood Sugar",
        department: "General Ward",
        requestedBy: "Dr. Raj Mehta",
        date: "27-09-2026",
        status: "Completed"
    }

];


/* =====================================================
   SAVE DEMO DATA TO LOCAL STORAGE
===================================================== */

// Save patients
localStorage.setItem(
    "patients",
    JSON.stringify(patients)
);


// Save beds
localStorage.setItem(
    "beds",
    JSON.stringify(beds)
);


// Save blood
localStorage.setItem(
    "blood",
    JSON.stringify(blood)
);


// Save tests
localStorage.setItem(
    "tests",
    JSON.stringify(tests)
);


/* =====================================================
   HANDOVER DATA
===================================================== */

const handovers = [

    {
        id: "H1001",
        patientId: "P1001",
        fromDepartment: "Emergency",
        toDepartment: "ICU",
        treatment: "Emergency cardiac monitoring",
        medicines: "Aspirin, Oxygen support",
        completedTests: "ECG",
        pendingTests: "CBC",
        instructions: "Continuous monitoring",
        doctor: "Dr. Amit Sharma",
        dateTime: "27-09-2026 10:30 AM"
    }

];

localStorage.setItem(
    "handovers",
    JSON.stringify(handovers)
);


/* =====================================================
   DEPARTMENT TRANSFER DATA
===================================================== */

const transfers = [

    {
        id: "TR1001",
        patientId: "P1001",
        patientName: "Rahul Patil",
        fromDepartment: "Emergency",
        toDepartment: "ICU",
        doctor: "Dr. Amit Sharma",
        reason: "Critical condition",
        status: "Completed",
        dateTime: "27-09-2026 10:45 AM"
    },

    {
        id: "TR1002",
        patientId: "P1002",
        patientName: "Priya Sharma",
        fromDepartment: "Emergency",
        toDepartment: "General Ward",
        doctor: "Dr. Neha Joshi",
        reason: "Observation",
        status: "Requested",
        dateTime: "27-09-2026 11:15 AM"
    },

    {
        id: "TR1003",
        patientId: "P1005",
        patientName: "Vikram Singh",
        fromDepartment: "Emergency",
        toDepartment: "ICU",
        doctor: "Dr. Amit Sharma",
        reason: "Critical care required",
        status: "In Transit",
        dateTime: "27-09-2026 11:30 AM"
    }

];

localStorage.setItem(
    "transfers",
    JSON.stringify(transfers)
);

console.log("Hospital demo data loaded successfully.");
})();