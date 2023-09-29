cmake_minimum_required(VERSION 3.13)

pico_sdk_init()

add_executable(TONY_spi_master
        TONY_spi_master.c
        )

# Pull in basic dependencies
target_link_libraries(TONY_spi_master pico_stdlib hardware_spi)


pico_enable_stdio_usb(TONY_spi_master 1)
pico_enable_stdio_uart(TONY_spi_master 0)


# create map/bin/hex file etc.
pico_add_extra_outputs(TONY_spi_master)

# add url via pico_set_program_url
example_auto_set_url(TONY_spi_master)
