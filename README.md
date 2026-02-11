# MultiSig Wallet Lite

A professional-grade implementation of a multi-signature smart contract wallet. This project demonstrates how to handle collective asset management where transactions require approval from multiple authorized owners.

## Features
* **M-of-N Authorization:** Flexible threshold requirements for transaction execution.
* **Transaction Lifecycle:** Submit, confirm, and execute flow for maximum security.
* **Reentrancy Protection:** Built with security best practices to prevent common exploits.
* **Flat Architecture:** No complex directory nesting—ideal for educational review or quick integration.

## How to Use
1. **Submit:** An owner proposes a transaction (destination, value, data).
2. **Confirm:** Other owners approve the transaction ID.
3. **Execute:** Once the threshold is met, anyone can trigger the execution.
