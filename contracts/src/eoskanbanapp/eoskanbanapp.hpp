#pragma once

#include <eosio/eosio.hpp>

using namespace eosio;

namespace eoskanban {

  CONTRACT eoskanbanapp : public eosio::contract  {
    public:
      using contract::contract;

      ACTION createboard( eosio::name board_name);

    private:
      TABLE board {
          eosio::name board_name;
          uint64_t primary_key()const { return board_name.value; }
      };
      typedef eosio::multi_index<name("boards"), board> boards_table;
  };

}
