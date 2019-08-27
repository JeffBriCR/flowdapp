#include "eoskanbanapp.hpp"

namespace eoskanban {

  void eoskanbanapp::createboard( eosio::name board_name ) {
    require_auth( _self );
  }

}

EOSIO_DISPATCH( eoskanban::eoskanbanapp, (createboard) )
