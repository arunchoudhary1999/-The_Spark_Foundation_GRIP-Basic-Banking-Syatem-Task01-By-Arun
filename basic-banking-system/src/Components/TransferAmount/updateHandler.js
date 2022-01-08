import axios from "axios";

export const updateHandler = (sender, receiver, amount) => {
    console.log(sender);
    console.log(receiver);
    console.log(amount);
    const transHistory = {
        transactionId: Number(
            String(sender.customerId) + String(receiver.customerId)
        ),
        sender: `${sender.firstname} ${sender.lastname}`,
        receiver: `${receiver.firstname} ${receiver.lastname}`,
        amount: Number(amount),
    };
    console.log(transHistory);

    //update the transaction history
    axios
        .post("/transactions/add", transHistory)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

    //update the userdetails
    axios
        .post(`/customers/update/${sender._id}`, sender)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

    //update receiver in userdetails
    axios
        .post(`/customers/update/${receiver._id}`, receiver)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
};
