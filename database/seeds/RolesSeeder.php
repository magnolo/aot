<?php

use Illuminate\Database\Seeder;
use App\Role;


class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $role = new Role();
        $role->name = "admin";
        $role->display_name = "Admin";
        $role->save();

        $role = new Role();
        $role->name = "moderator";
        $role->display_name = "Moderator";
        $role->save();

        $role = new Role();
        $role->name = "user";
        $role->display_name = "User";
        $role->save();
    }
}
