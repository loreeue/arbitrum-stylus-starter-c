#include "../include/stylus_sdk.h"
#include "../stylus-sdk-c/include/stylus_utils.h"
#include "../stylus-sdk-c/include/string.h"

const uint8_t STORAGE_SLOT_BOOK[32] = {
    0x12, 0x34, 0x56, 0x78, 0x90, 0xab, 0xcd, 0xef,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01
};

const uint8_t STORAGE_SLOT_METADATA[32] = {
    0x12, 0x34, 0x56, 0x78, 0x90, 0xab, 0xcd, 0xef,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02
};

uint8_t buf_out[32];

ArbResult inline _return_success_bebi32(uint8_t *retval, size_t len) {
    ArbResult res = {Success, retval, len};
    return res;
}

ArbResult store_book(uint8_t *input, size_t len) {
    if (len != 32) {
        return _return_short_string(Failure, "InvalidLength");
    }
    uint8_t *slot_address = (uint8_t *)(STORAGE_SLOT_BOOK + 0);
    storage_cache_bytes32(slot_address, input);
    storage_flush_cache(false);

    // Verificar que el almacenamiento se realizó correctamente
    uint8_t verify_buf[32];
    storage_load_bytes32(slot_address, verify_buf);

    return _return_success_bebi32(input, 32);
}

ArbResult store_metadata(uint8_t *input, size_t len) {
    if (len != 32) {
        return _return_short_string(Failure, "InvalidLength");
    }
    uint8_t *slot_address = (uint8_t *)(STORAGE_SLOT_METADATA + 0);
    storage_cache_bytes32(slot_address, input);
    storage_flush_cache(false);

    // Verificar que el almacenamiento se realizó correctamente
    uint8_t verify_buf[32];
    storage_load_bytes32(slot_address, verify_buf);

    return _return_success_bebi32(input, 32);
}

/*ArbResult get_book() {
    uint8_t *slot_address = (uint8_t *)(STORAGE_SLOT_BOOK + 0);
    storage_load_bytes32(slot_address, buf_out);
    if (bebi32_is_zero(buf_out)) {
        return _return_short_string(Failure, "BookNotFound");
    }
    return _return_success_bebi32(buf_out, 32);
}

ArbResult get_metadata() {
    uint8_t *slot_address = (uint8_t *)(STORAGE_SLOT_METADATA + 0);
    storage_load_bytes32(slot_address, buf_out);
    if (bebi32_is_zero(buf_out)) {
        return _return_short_string(Failure, "MetadataNotFound");
    }
    return _return_success_bebi32(buf_out, 32);
}*/

int handler(size_t argc) {
    uint8_t argv[argc];
    read_args(argv);

    FunctionRegistry registry[] = {
        {to_function_selector("store_book(bytes32)"), store_book},
        {to_function_selector("store_metadata(bytes32)"), store_metadata},
        /*{to_function_selector("get_book()"), get_book},
        {to_function_selector("get_metadata()"), get_metadata},*/
    };

    uint32_t signature = *((uint32_t *)argv);

    ArbResult res = call_function(
        registry,
        sizeof(registry) / sizeof(registry[0]),
        signature,
        argv + 4,
        argc - 4
    );

    return (write_result(res.output, res.output_len), res.status);
}

ENTRYPOINT(handler)
