function fibonacci(n) {
    if (n === 0) {
        return [0];
    }
    if (n === 1) {
        return [0, 1];    
    }

    const kembali = fibonacci(n - 1);
    const nilaiLanjut = kembali[kembali.length - 1] + kembali[kembali.length - 2];
    return [...kembali, nilaiLanjut];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
