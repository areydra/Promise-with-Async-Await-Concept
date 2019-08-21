// Promise-based menggunakan then dan catch
getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log('Commits', commits))
  .catch(err => console.log('Error', err.message));


// Promise-based menggunakan async dan await
async function notifyCustomer() { //menggunakan async untuk menjalankan await(await yg ada didalam 1 function async berarti satu paket untuk dijalankan)
  const customer = await getCustomer(1); //mengambil data promise dari function getCustomer
  console.log('Customer: ', customer);  //mengirim data customer setelah dijalankan
  if (customer.isGold) { //ambil data customer setelah dijalankan
    const movies = await getTopMovies(); //mengambil data promise dari function getTopMovies
    console.log('Top movies: ', movies);
    await sendEmail(customer.email, movies); //mengambil data sendEmail dari function sendEmail
    console.log('Email sent...');
  }
}
notifyCustomer(); //jalankan function 
//NOTE : data diambil sesuai await pertama yg dijalankan (synchronus(dari atas kebawah))
//NOTE : async & await hanya mengembalikan nilai resolve / yg berhasil dieksekusi

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);  
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}