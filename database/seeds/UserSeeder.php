<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $admin = Role::where('name', 'admin')->firstOrFail();
        $user = new User();
        $user->email = "walder.manfred@gmail.com";
        $user->password = Hash::make('vald12345');
        $user->name = "Manfred Walder";
        // $user->confirmed = 1;
        $user->save();
        $user->attachRole($admin);

        $user = new User();
        $user->email = "giuliana.monina@univie.ac.at";
        $user->password = Hash::make('SaveTheW');
        $user->name = "Giuliana Monina";
        // $user->confirmed = 1;
        $user->save();
        $user->attachRole($admin);
    }
}
