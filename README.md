# TokenVendor
##THIS IS A TOKEN VENDOR
##ITS TAKES THE TOKEN SUPPLY UPON DEPLOYMENT
##AND ASSIGNS THE VENDORS ADDRESS AS THE TOKEN OWNER AND SENDS A PORTION OF THE SUPPLY TO THE VENDORS ACCOUNT

##MODE OF OPERATION
#ONLY THE DEPLOYER IS ALLOWED TO WITHDRAW FUNDS FROM THE VENDORS ACCOUNTS
#ONLY THE DEPLOYER IS ALLOWED TO SET RATE(RATE FOR BUYING AND SELLING TOKENS)
#NOTE USE 1 AS RATE TO AVOID HEAD SCRATCHINGS
#WHEN A USER BUYS A TOKEN ETHER IS THE PREFERRED PAYMENT THE ETHER SENT IS MULTIPLIED BY THE RATE
#TO GET THE QUANTITY OF TOKENS TO BE SENT TO THE BUYER IE IF 1 WEI IS SENT TO BUY AND RATE IS 10 TOKENS
#RECIEVED WILL BE 10
#WHEN A USER SELLS A TOKEN THE AMOUNT TO BE SOLD IS MULTIPLIED BY THE RATE AND THE PRECEEDING VALUE IS SENT AS
#ETHER TO THE SELLER IE IF A USER WANTS TO SELL 10000 TOKENS AND RATE IS SET AS 1 PAYMENT RECIEVED WILL BE 10000WEI
#ALSO IF THERE IS A TOKEN SHORTAGE YOU CAN JUST MINT MORE TOKENS BUT MAKE SURE YOU DONT USE THIS SO AS NOT FLOOD
#THE MARKET WITH TOKENS

##P.S USE FREELY 