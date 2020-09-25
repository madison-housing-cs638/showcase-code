# AWS Amplify Setup

## Adding a new (Admin) user

1. Sign in to the AWS console and navigate to IAM (under Security, Identity, & Compliance)

   <img src="./media/AWS Amplify/image-20200524100255977.png" alt="image-20200524100255977" style="zoom:60%;" />  <img src="./media/AWS Amplify/image-20200524100329000.png" alt="image-20200524100329000" style="zoom:60%;" />
2. Manage users and create a new user with both Programmatic Access and AWS Management Console access. Use an auto-generated password and require a password reset. 

<img src="./media/AWS Amplify/image-20200524100714841.png" alt="image-20200524100714841" style="zoom:67%;" /> <img src="./media/AWS Amplify/image-20200524100735733.png" alt="image-20200524100735733" style="zoom:65%;" />  

3. Give them admin permissions and hit next.
4. Give them no tags, hit next. You should see a review like this:

<img src="./media/AWS Amplify/image-20200524101115885.png" alt="image-20200524101115885" style="zoom:67%;" /> 

5. Send them an email with login instructions. Me sure to remind them to delete this email afterwards.

<img src="./media/AWS Amplify/image-20200524101519954.png" alt="image-20200524101519954" style="zoom:80%;" /> 

<img src="./media/AWS Amplify/image-20200524101643537.png" alt="image-20200524101643537" style="zoom:55%;" />  

## Getting Started as a new User

#### Sign into the AWS dashboard, setup a permanent password.

0. Open the email you have been sent by the admins, copy your credentials to a notepad file.

<img src="./media/AWS Amplify/image-20200524112210911.png" alt="image-20200524112213298" style="zoom:67%;" /> 

1. Go to the provided sign-in URL, and sign in with the provided credentials. Then create a new password. In this case, we will use `T@dpoles` 

   <img src="./media/AWS Amplify/image-20200524112859620.png" alt="image-20200524112859620" style="zoom:67%;" />  <img src="./media/AWS Amplify/image-20200524113108756.png" alt="image-20200524113108756" style="zoom:67%;" /> 

#### Installing the necessary CLI Software.

0. Open up to a central directory, possibly `~` using `cd ~`

1. Run these commands to install the aws cli, following the instructions [Here](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html) 

```
#download the cli
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

#unzip the cii
unzip awscliv2.zip

#run the cli install
sudo ./aws/install

#verify the install 
aws --version
```

2. Configure the aws cli with the following commands and options, as described [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration) 

```
aws configure
#AWS Access Key ID [None]: AKIAI44QH8DHBEXAMPLE
#AWS Secret Access Key [None]: je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY
#Default region name [None]: us-east-2
#Default output format [None]: json
```

3. Install the aws amplify cli, following the instructions [here](https://docs.amplify.aws/cli/start/install#install-the-amplify-cli)

   `npm install -g @aws-amplify/cli` 
   
4. Setup your AWS password as an environment variable.

   Edit your .bashrc file by running `code .` from the `~` directory, then open the `.bashrc` file.

   Add `export NPM_PASS=AKIAXCCICXD7DODBKXWA` (use your **Access Key ID**) to the end of the file, save, and exit code.

   Restart your shell.

   **FIX: ** 

4. Navigate to an amplify project, like `flex-card`, and run `amplify init` , using the following options. 

<img src="./media/AWS Amplify/image-20200524142738004.png" alt="image-20200524142738004" style="zoom:80%;" /> 


Now, you should be good to go!