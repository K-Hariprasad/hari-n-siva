// custom calculator

function estimatePayment(){
    let purchase_price = +jQuery("#purchase_price").val(); //amount
    let down_payment = +jQuery("#down_payment").val(); //percentage
    let loan_term = +jQuery("#loan_term").val(); //year
    let interest_rate = +jQuery("#interest_rate").val(); //percentage interest rate

    let down_payment_amount = down_payment / 100 * purchase_price;
    let total_amount = purchase_price - down_payment_amount; //month
    let total_loan_amount = total_amount + total_amount * (interest_rate / 100); //month
    let monthly_payment =  total_loan_amount / (loan_term * 12);
    jQuery("#down_payment_value").text('$'+down_payment_amount.toFixed(2));
    jQuery("#load_amount_value").text('$'+total_loan_amount.toFixed(2));
    jQuery("#monthly_payment_value").text('$'+monthly_payment.toFixed(2));
}

