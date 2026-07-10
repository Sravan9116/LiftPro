const bcrypt = require("bcrypt");

async function generateHashes() {

    const adminHash = await bcrypt.hash("Admin@123", 10);
    const employeeHash = await bcrypt.hash("Employee@123", 10);
    const customerHash = await bcrypt.hash("Customer@123", 10);
    const hash = await bcrypt.hash("Sravan@1234", 10);

    console.log("\n===== GENERATED HASHES =====\n");

    console.log("Admin:");
    console.log(adminHash);

    console.log("\nEmployee:");
    console.log(employeeHash);

    console.log("\nCustomer:");
    console.log(customerHash);

    console.log("\nSravan:");
    console.log(hash);

}

generateHashes();