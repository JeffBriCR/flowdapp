cmake_minimum_required(VERSION 3.13)
project(eoskanbanapp)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)

add_contract( eoskanbanapp eoskanbanapp eoskanbanapp.cpp )
target_include_directories( eoskanbanapp PUBLIC ${CMAKE_SOURCE_DIR}/../include )
