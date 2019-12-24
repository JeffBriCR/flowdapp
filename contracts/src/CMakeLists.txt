project(kanbankanban)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)

add_contract( kanbankanban kanbankanban kanbankanban.cpp )
target_include_directories( kanbankanban PUBLIC ${CMAKE_SOURCE_DIR}/../include )
target_ricardian_directory( kanbankanban ${CMAKE_SOURCE_DIR}/../ricardian )
